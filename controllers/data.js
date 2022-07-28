const itemModel = require("../models/data");


exports.createItem =async (req,res)=>{
    try{
        const items =await new itemModel(req.body).save();
        res.json(items);
    }catch(err){
        res.json({err});
    }

}
exports.getAllItem =async (req,res)=>{
    try{
        const items =await itemModel.find();
        res.json(items);
    }catch(err){
        res.json({err});
    }

}
exports.getItem =async (req,res)=>{
    try{
        const items =await itemModel.find({_id:req.params.itemID});
        res.json(items);
    }catch(err){
        res.json({err});
    }

}
exports.deleteItem =async (req,res)=>{
    
        itemModel.findOneAndDelete({_id:req.params.itemID},
            (err,data)=>{
                if(err){
                    res.json({err});
                }else{
                    res.json(data);
                }
            });
}
exports.updateItem =async (req,res)=>{
    
    itemModel.findOneAndUpdate({_id:req.params.itemID},req.body,{new:true},
        (err,data)=>{
            if(err){
                res.json({err});
            }else{
                res.json(data);
            }
        });
}