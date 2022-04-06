const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});


app.use('/', router);
app.use('/MVVM',express.static('MVVM'))
//app.listen(process.env.port || 3000);

//console.log('Running at Port 3000');

//https://bachelor-project-admin.herokuapp.com/