// const mongoose=reqiure('mongoose');
// //define the momgodb connection url
// const mongoURl='mongodb://127.0.0.1:27017/hotels';
// //set up mongodb connection
// mongoose.connect(mongoURl,{
//     userNewURLParser:true,
//     userUnifiedTopology:true
// })
// //get the dafult connection
// //Mongoose maintains a default connection object repressenting MongoDb
// const db=mongoose.connection;
// //define event listener
// db.on('connected',()=>{
//     console.log('connected to mongdb server');
// })
// db.on('disconnected',()=>{
//     console.log('disconnected to mongdb server');
// })
// db.on('error',()=>{
//     console.log('error  to mongdb server');
// })
// //exports the momgoose
// module.exports=db;
const mongoose = require('mongoose');

// Define the MongoDB connection URL
const mongoURL = 'mongodb://127.0.0.1:27017/hotels';

// Set up MongoDB connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Get the default connection
const db = mongoose.connection;

// Define event listeners
db.on('connected', () => {
    console.log('Connected to MongoDB server');
});

db.on('disconnected', () => {
    console.log('Disconnected from MongoDB server');
});

db.on('error', (error) => {
    console.error('Error connecting to MongoDB server:', error);
});

// Export the mongoose connection
module.exports = db;
