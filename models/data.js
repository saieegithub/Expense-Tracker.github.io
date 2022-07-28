const mongoose = require ("mongoose");
const itemSchema = new mongoose.Schema({
    item:String,
    price:Number,
    date:String
});
module.exports = mongoose.model("items",itemSchema);