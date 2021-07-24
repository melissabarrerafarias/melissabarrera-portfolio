  const router = require('express').Router(); 

const apiRoutes = require('./api');

// prefix
router.use('/api', apiRoutes); 

module.exports = router;