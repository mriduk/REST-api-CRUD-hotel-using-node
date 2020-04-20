const express=require('express');
const router=express.Router();
const post=require('../../models/post');




router.get('/',(req,res,next)=>{
    post.find()
    .then((post)=>{
        res.json(post)
    })
    .catch(err=>console.log(err))
});


router.post('/add',(req,res,next)=>{
    const hotel_branch_name=req.body.hotel_branch_name;
    const basicroom=req.body.basicroom;
    const premiumroom=req.body.premiumroom;
    const no_of_employees=req.body.no_of_employees;
    const quaterly_sales=req.body.quaterly_sales;
    const annual_sales=req.body.annual_sales;
    const events_handeled=req.body.events_handeled;
    const annual_income=req.body.annual_income;
    newpost=new post({
        hotel_branch_name:hotel_branch_name,
        basicroom:basicroom,
        premiumroom:premiumroom,
        no_of_employees:no_of_employees,
        quaterly_sales:quaterly_sales,
        annual_sales:annual_sales,
        events_handeled:events_handeled,
        annual_income:annual_income,

    });
    newpost.save()
    .then(post=>{
        res.json(post);
    })
    .catch(err=>console.log(err));
})



router.put('/update/:id',(req,res,next)=>{
   let id=req.params.id;
    post.findById(id)
    .then(post=>{
        post.hotel_branch_name=req.body.hotel_branch_name;
        post.basicroom=req.body.basicroom;
        post.premiumroom=req.body.premiumroom;
        post.no_of_employees=req.body.no_of_employees;
        post.quaterly_sales=req.body.quaterly_sales;
        post.annual_sales=req.body.annual_sales;
        post.events_handeled=req.body.events_handeled;
        post.annual_income=req.body.annual_income;
        post.save()
        .then(post=>{
            res.send({message:'POST UPDATED SUCESSFULLY',
        status:'sucess',
    post:post
})

        })
        .catch(err=>console.log(err))
    })
    .catch(err=>console.log(err))
});


router.delete('/delete/:id',(req,res,next)=>{
    let id=req.params.id;
    post.findById(id)
    .then(post=>{
        post.delete()
        .then(post=>{
            res.send({message:'POST DELETED SUCESSFULLY',
        status:'sucess',
    post:post
})

        })
        .catch(err=>console.log(err))
    })
    .catch(err=>console.log(err))

})
module.exports=router;