const mongoose=require("mongoose");
require("dotenv").config()
const connection=mongoose.connect(`mongodb+srv://r:Farman@cluster0.ksgue.mongodb.net/insightcentral?retryWrites=true&w=majority`,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })


module.exports={connection}
