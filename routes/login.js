const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Filepath to file users.json
const usersFilePath = path.join(__dirname, '../Static pages', 'userInfo.json');

//Read data from file
var users = [];
try {
    const usersData = fs.readFileSync(usersFilePath, 'utf8');
    users = JSON.parse(usersData);
} catch (err) {
    console.error('Error reading users file', err);
}

// Define a route
router.post('/', (req, res) => {
    const { username, password } = req.body;

    // Check username and password
    const user = users.find(u => u.userName === username && u.password === password);

    if (user) {
        // Register successfully, Come back to home.html
        const filePath = path.join(__dirname, '../Static pages', 'home.html');
        res.sendFile(filePath);
    } else {
        const filePath = path.join(__dirname, '../Static pages', 'index.html');
        res.sendFile(filePath);
    }
});

module.exports = router;
