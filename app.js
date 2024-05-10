const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const rootDir = require('./util/path');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

// To parse req.body
app.use(bodyParser.urlencoded({ extended: false }));

// To serve static files
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});

app.listen(3000);
