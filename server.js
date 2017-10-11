const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/static/auth.html');
});

//
// Checks cookies for authorization
app.get('/admin-page', (req, res) => {
  if (typeof req.cookies.IdentityCookie === 'undefined')
    res.status(401).send('authorization required');
  else if (req.cookies.IdentityCookie !== 'admin')
    res.status(403).send('forbidden');
  else
    res.send('super secret info');
});

app.listen(1139, () => {
  console.log('Listening on port 1139...');
});
