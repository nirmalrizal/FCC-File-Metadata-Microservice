var express = require('express');
var app = express();
var multer = require('multer');
var upload = multer({ dest: './public/uploads/' });
var exphbs = require('express-handlebars');
var path = require('path');

var port = process.env.PORT || 3000;

//View engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// setting static files directory
app.use(express.static(path.join(__dirname, './public')));

app.listen(port,function(err){
  if(err) throw err;
  console.log('Server listening on port : 3000');
});

app.get('/',function(req,res){
  res.render('index');
});

app.post('/get-file-size',upload.single("upl"),function(req,res){
  console.log(req.file.size);
  res.json({
    "size" : req.file.size
  });
});
