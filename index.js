const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

// Sử dụng bodyParser để phân tích nội dung của yêu cầu từ form
app.use(bodyParser.urlencoded({ extended: true }));

// Sử dụng middleware để phục vụ các tệp tĩnh từ thư mục 'public'
app.use(express.static(path.join(__dirname, 'Static pages')));

// Import router
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

const loginRouter = require('./routes/login');
app.use('/login', loginRouter);

const registerRouter = require('./routes/register');
app.use('/register', registerRouter);

//Create a port for server
app.listen(5000, function(){
    console.log('Server is listening at port 5000 ...');
})