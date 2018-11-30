const express = require('express');
const verify = require('../routes/verify');
const event = require('../routes/event');
const error = require('../middlewares/error')

module.exports = function(app) {
    app.use(express.json());
    app.use('/api/verify', verify);
    app.use('/api/event', event);
   
    app.use(error);
}