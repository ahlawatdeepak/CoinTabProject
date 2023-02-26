const mongoose=require("mongoose")

function Connect(){
    return mongoose.connect("mongodb+srv://deepakahlawat10:deepakahlawat10@cluster0.qkndiwa.mongodb.net/cointab?retryWrites=true&w=majority")
}

module.exports=Connect