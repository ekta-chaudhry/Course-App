
const express = require('express');
const router = express.Router();

router.post('/purchase', (req, res, next) => {

});

router.get('/preview', (req, res, next) => {
    res.json({
        message: 'Hi from backend!'
    })
});

module.exports = router;
