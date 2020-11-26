var express = require('express');
var router = express.Router();
const mongoose=require('mongoose');
var userModel=require('../modules/user');

/*var getuserInfo = userModel.find({});
//To get data of users till now
router.get('/getUser',function(req,res,next){
    getuserInfo.exec((err,data)=>{
        if(err) throw err;
        res.send(data);
    });
})*/

router.get('/post',function(req,res,next){
    res.send('Module Created');
});

router.post('/addUser',function(req,res,next){
    res.send('Module Created');
    var fullName=req.body.fullName;
    var email=req.body.email;
    var branch=req.body.branch;
    var rollno=req.body.rollno;
    var password=req.body.password;
    var confirmPassword=req.body.confirmPassword;

    var userDetails=new userModel({
        _id:mongoose.Schema.Types.ObjectId(),
        FullName:fullName,
        Email:email,
        Branch:branch,
        Rollno:rollno,
        Password:password,
    });
    userDetails.save(function(err,doc){
        if(err) throw err;
        res.send('Successfully Registered');
    });


    /*if(password!==confirmPassword){
        res.json({
            message:"Password didn't match",
        });

    }
    else{
        var userDetails=new userModel({
            _id:mongoose.Schema.Types.ObjectId(),
            FullName:fullName,
            Email:email,
            Password:password,
        });
        userDetails.save(function(err,doc){
            if(err) throw err;
            res.send(Successfully Registered);
        });
        /*userDetails.save()
        .then(doc=>{
            res.status(201).json({
                message:"User Registered Successfully",
                results:doc
            });
        })
        .catch(err=>{
            res.json(err);
        });
    }*/  
});
module.exports = router;