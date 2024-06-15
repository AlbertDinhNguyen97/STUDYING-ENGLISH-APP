const express = require('express');
const router = express.Router();
const path = require('path');

// Define a route
router.get('/', (req, res) => {
    const filePath = path.join(__dirname, '../Static pages', 'index.html');
    res.sendFile(filePath, (err) => {
        if (err) {
            console.error('Error sending file:', err);
            res.status(500).send('Internal Server Error');
        }
    });
});

module.exports = router;
