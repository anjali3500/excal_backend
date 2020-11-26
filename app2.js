var express = require('express');
var app=express();
//var createError=require('http-errors');
//var path=require('path');
//var logger=require('morgan');

var UserAPI=require('./routes/user');


//app.use(express.json());
//app.use(express.urlencoded({extended:false}));
//app.use(express.static(path.join(__dirname, 'public')));
app.use('/user',UserAPI);

/*app.use(function(req,res,next){
    next(createError(404));
});
app.use(function(req,res,next){
    res.locals.message = err.message;
    res.locals.error=res.app.get('env')=='development'?err:{};
    res.status(err,status||500);
    res.json({
        error:"page not found"
    });
});*/
app.get('/',function(req,res){
    res.send('this is homepage');
});

app.listen(3000);