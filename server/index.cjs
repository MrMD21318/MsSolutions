const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./database.cjs');

const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 3001;
const JWT_SECRET = 'your-secret-key-change-in-production'; // In prod, use ENV var

// Security Middleware
app.use(helmet());
app.use(cors({
    origin: ['http://localhost:5173', 'https://www.msforsolutions.com', 'http://www.msforsolutions.com'], // Allow frontend origins
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(bodyParser.json());

// Rate Limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Auth Middleware
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.sendStatus(401);

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

// Log Visit (Public)
app.post('/api/visits', (req, res) => {
    const { page } = req.body;
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const userAgent = req.headers['user-agent'];

    const sql = 'INSERT INTO visits (page, ip, userAgent) VALUES (?, ?, ?)';
    db.run(sql, [page, ip, userAgent], function (err) {
        if (err) {
            console.error("Error logging visit:", err.message);
            res.status(500).json({ error: "Internal Server Error" }); // Don't leak SQL errors
            return;
        }
        res.json({ message: 'Visit logged', id: this.lastID });
    });
});

// Get Visit Stats (Protected)
app.get('/api/stats', authenticateToken, (req, res) => {
    const today = new Date().toISOString().split('T')[0];

    // Total Visits
    const totalVisitsQuery = 'SELECT COUNT(*) as count FROM visits';
    // Today's Visits
    const todayVisitsQuery = `SELECT COUNT(*) as count FROM visits WHERE date(timestamp) = ?`;
    // Last 7 Days Visits for Chart
    const weeklyStatsQuery = `
        SELECT date(timestamp) as date, COUNT(*) as count 
        FROM visits 
        WHERE timestamp >= date('now', '-7 days') 
        GROUP BY date(timestamp)
        ORDER BY date(timestamp) ASC
    `;

    db.get(totalVisitsQuery, (err, totalRow) => {
        if (err) return res.status(500).json({ error: err.message });

        db.get(todayVisitsQuery, [today], (err, todayRow) => {
            if (err) return res.status(500).json({ error: err.message });

            db.all(weeklyStatsQuery, (err, weeklyRows) => {
                if (err) return res.status(500).json({ error: err.message });

                res.json({
                    totalVisits: totalRow.count,
                    todayVisits: todayRow.count,
                    weeklyStats: weeklyRows
                });
            });
        });
    });
});

// Save Contact Message (Public)
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    // Basic Input Validation
    if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields are required" });
    }

    const sql = 'INSERT INTO messages (name, email, message) VALUES (?, ?, ?)';
    db.run(sql, [name, email, message], function (err) {
        if (err) {
            res.status(500).json({ error: "Internal Server Error" });
            return;
        }
        res.json({ message: 'Message sent', id: this.lastID });
    });
});

// Get Messages (Protected)
app.get('/api/messages', authenticateToken, (req, res) => {
    const sql = 'SELECT * FROM messages ORDER BY timestamp DESC';
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ messages: rows });
    });
});

// Admin Login
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    console.log(`[LOGIN ATTEMPT] Username: ${username}, Password provided: ${password}`); // DEBUG

    const sql = 'SELECT * FROM users WHERE username = ?';
    db.get(sql, [username], (err, row) => {
        if (err) {
            console.error("[LOGIN ERROR] DB Error:", err);
            res.status(500).json({ error: "Internal Server Error" });
            return;
        }
        if (row) {
            console.log(`[LOGIN] User found: ${row.username}, Hash in DB: ${row.password}`); // DEBUG

            // Compare hashed password
            const validPassword = bcrypt.compareSync(password, row.password);
            console.log(`[LOGIN] Password valid? ${validPassword}`); // DEBUG

            if (validPassword) {
                const token = jwt.sign({ username: row.username }, JWT_SECRET, { expiresIn: '1h' });
                res.json({ message: 'Login successful', token, user: { username: row.username } });
            } else {
                res.status(401).json({ error: 'Invalid credentials' });
            }
        } else {
            console.log(`[LOGIN] User NOT found: ${username}`); // DEBUG
            res.status(401).json({ error: 'Invalid credentials' });
        }
    });
});

// DEBUG: Force Password Reset (Temporary)
const path = require('path');

// Helper to confirm database fix
app.get('/api/fix-db', (req, res) => {
    // ... (existing code for fix-db) ...
    const hashedPassword = bcrypt.hashSync("admin123", 10);
    const sql = "UPDATE users SET password = ? WHERE username = 'mohdabuhammad'";
    // Also try to insert if not exists
    const insertSQL = "INSERT OR IGNORE INTO users (id, username, password) VALUES (1, 'mohdabuhammad', ?)";
    db.run(insertSQL, [hashedPassword], function (err) {
        if (err) return res.status(500).json({ step: 'insert', error: err.message });
        db.run(sql, [hashedPassword], function (err) {
            if (err) return res.status(500).json({ step: 'update', error: err.message });
            res.json({ success: true, message: "Database fixed! Password reset to 'admin123'. Changes: " + this.changes });
        });
    });
});

// Serve Frontend Static Files
app.use(express.static(path.join(__dirname, '../dist')));

// Handle React Routing, return all requests to React app
app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
