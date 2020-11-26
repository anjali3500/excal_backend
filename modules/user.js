const mongoose=require('mongoose');
const dotenv=require('dotenv');

mongoose.connect('mongodb+srv:Amisha%40cb32//Amisha:@cluster0.ytwfl.mongodb.net/<dbname>?retryWrites=true&w=majority');
var conn =mongoose.Collection;
var userSchema= new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId(),
    FullName:{
        type:String,
        required:true,
    },
    Email:{
        type:String,
        required:true,
        index:{
            unique:true,
        }
    },
    Branch:{
        type:String,
        required:true
    },
    Rollno:{
        type: Number,
    },
    Password:{
        type: String,
        required:true
    },
});
var userModel=mongoose.model('user', userSchema);
module.exports=userModel;