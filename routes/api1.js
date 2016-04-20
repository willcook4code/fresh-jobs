let express = require('express');
let router = express.Router();
let path = require('path');
let bookshelfApi = require('bookshelf-api');
let configuredApi = bookshelfApi({
	path: path.join(__dirname, '../models')
});

router.use('/', configuredApi);

// router.get('/products', function(req, res, next) {

// });

module.exports = router;
