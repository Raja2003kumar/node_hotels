console.log("server is ");
// declaration of functtion in javascript
// function add(a,b){
//     return a+b;
// }
// var add=(a,b)=>{return a+b};
// var add =function(a,b){
//     return a+b;
// }
// var result=add(990,10);
// console.log(result);
//call back function
// function callback(){
//     console.log("added succesfil");
// }
// const add=function(a,b,callback){
//     var res=a+b;
//     console.log('result',+res);
//     callback();
// }
// add(9,8,callback);
//file system and OS
// var fs=require('fs');
// var os=require('os');
// var user=os.userInfo();
// console.log(user);
// console.log(user.username);
// fs.appendFile('greeting.txt','hi' +user.username+'\n',()=>{
//     console.log('file created')
// })
// const notes=require('./notes.js');
// console.log('server file is available');
// var age=notes.age;
// console.log(age);
// var res=notes.addNo(age+18,10);
// console.log('resukt:' +res);
// const obj = {name: "John", age: 30, city: "New York"};
// const myJSON = JSON.stringify(obj);
// console.log(myJSON);
// const express = require("express");
// const app = express();
// // const db=require('./db');
// const db=require('./db');
// const port = 3000;

// app.get("/", function (req, res) {
//   res.send("Hello World!");
// });
// app.get('/chicken',(req,res)=>{
//     res.send("sure sir i serverd chicken");
// });
// app.listen(port, function () {
//   console.log(`Example app listening on port ${port}!`);
// });
// const express = require("express");
// const app = express();
// const db = require("./db");
// // const Person=require("./models/Person");
// // const Person=require('./model/Person');
// const Person = require('./models/person.js');
// const Menu=require('./models/Menu.js');
// const port = 3000;
// const bodyParser=require('body-parser');
// app.use(bodyParser.json());

// // Middleware to parse JSON requests (if needed in the future)
// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.get("/chicken", (req, res) => {
//   res.send("Sure sir, I served chicken.");
// });
// app.post('/person', async(req,res)=>{
//   try{
//   const data =req.body;//assume the request body contains person data
//   const newPerson=new Person(data);
//   //save the new person data
//   const response=await newPerson.save();
//   console.log('data saved');
//   res.status(900).json(response);
//   }
//   catch(err){
// console.log(err);
// res.status(800).json({error:"internal server error"});
//   }
// })
// app.get('/person',async(req,res)=>{
// try{
//     const data=await Person.find();
//     console.log('data fetched');
//     res.status(900).json(data);

// }
// catch(err){
//     console.log(err);
//     res.status(200).json({error:"internal server error"});

// }
// })
//psot method to add  menu
// app.post('/menu',async(res,req)=>{
//     try{
//       const data=req.body;
//       const newMenu=new Menu(data);
//       const response=await newMenu.save();
//       console.log('dat srevre');
//       res.status(201).json(response);
//     }
//     catch(err){
//       console.log(err);
//       res.status(500).json({error:'internal server error'});
//     }
// })
// app.listen(port, (err) => {
//   if (err) {
//     console.error("Failed to start server:", err);
//   } else {
//     console.log(`Example app listening on port ${port}!`);
//   }
// });
const express = require("express");
const app = express();
const db = require("./db");
// const Person = require('./models/person.js');
// const Menu = require('./models/Menu');
//impoet the router files
const menuRoutes=require('./routes/MenuRoutes');
const port = 3000;
app.get('/',function(req,res){
  res.send("welcome miy hotels")
})
// Middleware to parse JSON requests
app.use(express.json());
app.use('/menu',menuRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/chicken", (req, res) => {
  res.send("Sure sir, I served chicken.");
});

app.post('/person', async (req, res) => {
  try {
    const data = req.body; // assume the request body contains person data
    const newPerson = new Person(data);
    // save the new person data
    const response = await newPerson.save();
    console.log('Data saved');
    res.status(201).json(response); // 201 for resource creation success
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get('/person', async (req, res) => {
  try {
    const data = await Person.find();
    console.log('Data fetched');
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// POST method to add a menu
app.post('/menu', async (req, res) => { // Corrected parameter order
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
app.get('/menu', async (req, res) => {
    try {
      const data = await Menu.find();
      console.log('Data fetched');
      res.status(200).json(data);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  //parameterized get function
  app.get('/menu/:workType',async (req,res)=>{
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
//imoprt  the router files
const MenuRoutes=require('./routes/MenuRoutes');
app.use('/',MenuRoutes);
app.listen(port, (err) => {
  if (err) {
    console.error("Failed to start server:", err);
  } else {
    console.log(`Example app listening on port ${port}!`);
  }
});


