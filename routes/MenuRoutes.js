const express=require('express');
const router=express.Router();
const Menu = require('./../models/Menu.js');

// POST method to add a menu
router.post('/', async (req, res) => { // Corrected parameter order
    try {
      const data = req.body;
      const newMenu = new Menu(data);
      const response = await newMenu.save();
      console.log('Data saved');
      res.status(201).json(response); // 201 for resource creation success
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  //get method
  router.get('/', async (req, res) => {
    try {
      const data = await Menu.find();
      console.log('Data fetched');
      res.status(200).json(data);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  //parametrezed 
  //parameterized get function
  router.get('/:workType',async (req,res)=>{
    try{
 const workType=req.params.workType;
 if(workType=='sweet'||workType=='spicy'||workType=='sour'){
     const response=await Menu.find({taste:workType});
     console.log('response fetched');
     res.status(200).json(response);
 }
 else{
     res.status(404).json({error:'invalid worktype'})
 }
    }
    catch(err){
 console.log(err);
 res.status(500).json({error:'internal server error'});
    }
   })
   router.put('/:id',async(req,res)=>{
    try{
        //extract the id from URL parameter
        const menuId=req.params.id;
        //Updated data the person
        const updatedMenuData=req.body;
        const response=await Menu.findByIdAndUpdate(menuId,updatedMenuData,{
         new:true,
         runValidators:true,
        })
if(!response){
    return res.status(404).json({error:'menu not find'});
}
console.log('data updated');
res.status(200).json(response);
    }
    catch(err){
console.log(err);
res.status(500).json({error:'internal server error'});
    }
   })
   router.delete('/:id',async(req,res)=>{
   try{
    const menuId=req.params.id;
    const response =await Menu.findByIdAndDelete(menuId);
    if(!response){
        return res.status(404).json({error:'menu not found'});

    }
    console.log('data deletd');
    res.status(200).json({message: 'person data delted succes'});
}
catch(err){
    console.log(err);
    res.status(500).json({error:'inetrnal server erroor'});

}

   })
   module.exports=router;
