const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, 'database.sqlite');

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error connecting to database', err);
    } else {
        console.log('Connected to SQLite database');
        initTables();
    }
});

function initTables() {
    db.serialize(() => {
        // Visits Table
        db.run(`CREATE TABLE IF NOT EXISTS visits (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            page TEXT,
            timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
            ip TEXT,
            userAgent TEXT
        )`);

        // Messages Table
        db.run(`CREATE TABLE IF NOT EXISTS messages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            email TEXT,
            message TEXT,
            timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
            isRead BOOLEAN DEFAULT 0
        )`);

        // Admin User Table (Simple for demo)
        db.run(`CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE,
            password TEXT
        )`);

        // Seed initial admin user if not exists (admin/admin123)
        // IN REAL APP: Password should be hashed (e.g., bcrypt)
        const insert = 'INSERT OR IGNORE INTO users (username, password) VALUES (?, ?)';
        db.run(insert, ["admin", "admin123"]);
    });
}

module.exports = db;
