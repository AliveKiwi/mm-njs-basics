const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

// Set view engine to ejs
app.set('view engine', 'ejs');

// Tells where to store views, but default the folder name is set to views, and below command is not required
app.set('views', 'views');

// To parse req.body
app.use(bodyParser.urlencoded({ extended: false }));

// To serve static files
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  // res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
  res.status(404).render('404', {
    pageTitle: 'Page Not Found',
    // layout: 'main-layout', // For handlebars to specify a particular file for layout
  });
});

app.listen(3000);
