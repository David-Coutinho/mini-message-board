let express = require('express');
let router = express.Router();

// GET new-message form route
router.get('/new', function (request, response) {
  response.send();
});

module.exports = router;
