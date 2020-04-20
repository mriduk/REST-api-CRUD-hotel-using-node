const mongoose=require('mongoose');

const hotelschema=mongoose.Schema({
    hotel_branch_name:{
        type:String,
        required:true,

    },
    basicroom:{
        type:Number,
        required:true,
    },
    premiumroom:{
        type:Number,
        required:true,
    },
    no_of_employees:{
        type:Number,
        required:true,
    },
    
    quaterly_sales:{
        type:Number,
        required:true,
    },
    annual_sales:{
        type:Number,
        required:true,
    },
    events_handeled:{
        type:Number,
        required:true,
    },
    annual_income:{
        type:Number,
        required:true,
    },
    
});



const post=module.exports=mongoose.model('post',hotelschema);