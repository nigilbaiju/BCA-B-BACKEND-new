const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://nigiljoseph2017:nigil@cluster0.gb23b3l.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{console.log("Db connected")})
.catch(err=>console.log(err));

