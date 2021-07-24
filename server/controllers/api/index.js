const router = require('express').Router();

const messageRoutes = require('./messageRoutes');  

// prefixes routes
router.use('/messages', messageRoutes); 

module.exports = router;