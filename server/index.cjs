const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./database.cjs');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

// Log Visit
app.post('/api/visits', (req, res) => {
    const { page } = req.body;
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const userAgent = req.headers['user-agent'];

    const sql = 'INSERT INTO visits (page, ip, userAgent) VALUES (?, ?, ?)';
    db.run(sql, [page, ip, userAgent], function (err) {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ message: 'Visit logged', id: this.lastID });
    });
});

// Get Visit Stats
app.get('/api/stats', (req, res) => {
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

// Save Contact Message
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    const sql = 'INSERT INTO messages (name, email, message) VALUES (?, ?, ?)';
    db.run(sql, [name, email, message], function (err) {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ message: 'Message sent', id: this.lastID });
    });
});

// Get Messages
app.get('/api/messages', (req, res) => {
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
    const sql = 'SELECT * FROM users WHERE username = ? AND password = ?';
    db.get(sql, [username, password], (err, row) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        if (row) {
            res.json({ message: 'Login successful', user: { username: row.username } });
        } else {
            res.status(401).json({ error: 'Invalid credentials' });
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
