const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const rootDir = require('./util/path');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

// Set view engine to pug
app.set('view engine', 'pug');

// Tells where to store views, but default the folder name is set to views, and below command is not required
app.set('views', 'views');

// To parse req.body
app.use(bodyParser.urlencoded({ extended: false }));

// To serve static files
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  // res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
  res.status(404).render('404', { pageTitle: '404' });
});

app.listen(3000);
