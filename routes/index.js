var express = require('express');
var router = express.Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Mini Messageboard',
    messages: messages,
  });
});

// GET new-message form route
router.get('/new', function (request, response) {
  response.render('form');
});

// POST
router.post('/new', function (request, response) {
  let messageText = request.body.messageText;
  let messageUser = request.body.messageUser;
  messages.push({ text: messageText, user: messageUser, added: new Date() });
  response.redirect('/');
});

module.exports = router;
