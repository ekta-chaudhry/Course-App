const express = require('express');
const mongoose = require('mongoose');

const userRouter = require('./routes/user');
const courseRouter = require('./routes/course');
const adminRouter = require('./routes/admin');
const app = express();

app.use('/user', userRouter);
app.use('/admin', adminRouter);
app.use('/course', courseRouter);

mongoose.connect('mongodb+srv://ekta00sea:passworderror404@cluster0.7vsduk6.mongodb.net/course-app?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
    console.log('Connected!')
    app.listen(3000);
})