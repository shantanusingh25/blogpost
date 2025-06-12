// middleware/logger.js
const fs = require("fs");
const path = require("path");

const logger = (req, res, next) => {
    const logPath = path.join(__dirname, "../logs.log"); // adjust path if logs.log is at root

    const logEntry = `
[${new Date().toISOString()}]
IP: ${req.ip}
Method: ${req.method}
URL: ${req.originalUrl}
Body: ${JSON.stringify(req.body)}
---------------------------------------
`;

    fs.appendFile(logPath, logEntry, (err) => {
        if (err) {
            console.error("❌ Error writing to log file:", err);
        }
    });

    next();
};

module.exports = logger;
