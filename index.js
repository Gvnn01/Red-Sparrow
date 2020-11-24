const express = require("express")
const nunjucks = require("nunjucks")
const connectDB = require('./config/db')
const bodyParser = require('body-parser')


const app = express();

nunjucks.configure("routes", {
  express: app,
  noCache: true  
})
connectDB();

app.use(express.static("public"))
app.use(express.json({extended: false}));
app.use(bodyParser.urlencoded({extended: true}))
app.get('/', function(req, res) {
  res.render('index.html')
})

app.use('/', require('./routes/index'));
app.post('/api/url/shorten', require('./routes/url'))
app.use('/api/url', require('./routes/url'))


const PORT = 5000;

app.listen(PORT, () => console.log(`Server runing on port ${PORT}`));