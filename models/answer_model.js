const mongoose=require('../connection');
const Schema =mongoose.Schema;
const schema =new Schema({
    user:{type:mongoose.Types.ObjectId,ref:"users"},
    name: String,
    roll_no: String, 
    email: String,
    course: String,
    data:Object,
    created:Date

})
const model=mongoose.model("answers",schema)
module.exports=model;