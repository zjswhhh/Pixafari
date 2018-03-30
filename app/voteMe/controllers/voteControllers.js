var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({extened: false});


module.exports = function(app){

  app.get('/vote', function(req,res){
    res.render('index');
  });

  app.post('/vote', urlencodedParser, function(req,res){
    console.log(req.body);
    res.render('result', {data: req.body});
    //get data from the view and add it to mongodb
    // var newTodo = Todo(req.body).save(function(err, data){
    //   if(err) throw err;
    //   res.json(data);
    // });
  });

}
