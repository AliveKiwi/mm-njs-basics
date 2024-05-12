const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');
const rootDir = require('./util/path');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

// Set view engine to ejs
app.set('view engine', 'ejs');

// Set view engine to handlebars

// If you use this setting then you need to name your file as xyz.handlebars
// app.engine('handlebars', expressHbs());
// app.set('view engine', 'handlebars');

// If you use this setting then you need to name your file as xyz.hbs
// app.engine('hbs', expressHbs());
// app.engine(
//   'hbs',
//   expressHbs({
//     layoutsDir: 'views/layouts/',
//     defaultLayout: 'main-layout',
//     extname: 'hbs',
//   })
// );
// app.set('view engine', 'hbs');

// Set view engine to pug

// Set view engine to pug
// app.set('view engine', 'pug');

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
  res.status(404).render('404', {
    pageTitle: 'Page Not Found',
    // layout: 'main-layout', // For handlebars to specify a particular file for layout
  });
});

app.listen(3000);
