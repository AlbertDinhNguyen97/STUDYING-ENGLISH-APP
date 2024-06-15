const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Filepath to file users.json
const usersFilePath = path.join(__dirname, '../Static pages', 'userInfo.json');
router.post('/', (req, res) => {
    //Read data from file
    let users = [];
    try {
        const usersData = fs.readFileSync(usersFilePath, 'utf8');
        users = JSON.parse(usersData);
    } catch (err) {
        console.error('Error reading users file', err);
    }

    // Add user information to users object array
    users.push({
        userName : req.body.userName,
        password : req.body.passWord,
        phoneNumber : req.body.phoneNumber,
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        dateOfBirth : req.body.dateOfBirth,
        monthOfBirth : req.body.monthOfBirth,
        yearOfBirth : req.body.yearOfBirth,
        gender : req.body.gender
    });

    // Write to file again
    try {
        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 4));
        console.log('User added successfully');
    } catch (err) {
        console.error('Error writing users file', err);
    }

    //Comback to login page and announce register successfully
    const filePath = path.join(__dirname, '../Static pages', 'index.html');
    res.sendFile(filePath);
});

module.exports = router;