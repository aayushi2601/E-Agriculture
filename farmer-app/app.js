const express = require('express');
const path = require('path')
const session= require('express-session');
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render("index",{message:null});
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
});