const express = require('express');
const mongoose = require('mongoose');
const user = require('./Schema/user');
const app = express();


app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));
app.get('/',(req,res)=>{
    res.send("home get");
});
app.get('/GetUserByName',(req,res)=>{
    const u = mongoose.model('user', user.userSchema);
    console.log(req.query);
    
        
    u.find({name : req.query.name,password: req.query.password },(err,doc)=>{
        console.log(err);
        console.log(doc);

      
        console.log(doc); 
        res.send({usersData: doc})
    })
  
});
app.get('/GetAll',(req,res)=>{
    const u = mongoose.model('user', user.userSchema);
    
    
        
    u.find({},(err,doc)=>{
        console.log(err);
        console.log(doc);

      
        
        res.send({usersData: doc})
    })
  
});
app.get('/Update',(req,res)=>{
    const u = mongoose.model('user', user.userSchema);
    //console.log(req.query);
    u.findOneAndUpdate({name : req.query.name,password: req.query.password}, { score: req.query.score }, function(err, result) {
        
          console.log(err);
         
      });
        
    // u.find({name : req.query.name,password: req.query.password },(err,doc)=>{
    //     console.log(err);
    //     console.log(doc);

      
    //     console.log(doc); 
    //     res.send({usersData: doc})
    // })
  
});
app.get('/CheckIfNameExists',(req,res)=>{
    const u = mongoose.model('user', user.userSchema);
    console.log(req.query);
    

    u.find({name : req.query.name },(err,doc)=>{
        console.log(err);
       

      
      
        res.send({usersData: doc})
    })
  
});
app.get('/CheckIfUserExists',(req,res)=>{
    const u = mongoose.model('user', user.userSchema);
    console.log(req.query);
    

    u.find({name : req.query.name,password: req.query.password },(err,doc)=>{
        console.log(err);
       

      
      
        res.send({usersData: doc})
    })
  
});
app.post('/createUser',(req,res)=>{
    
    const u = mongoose.model('user', user.userSchema);

console.log(req.body.name);
console.log(req.body.age);
console.log(req.body.score);
// if (u.find({name : req.query.name},(err,doc)=>{
//     console.log(err);
    
//     res.send({usersData: doc})
// })) {
    
// }      
    u.create({
        name:req.body.name,
        password:req.body.password,
      
        score:req.body.score
    },(err,doc)=>
    {
        console.log(err);
        console.log(doc);
    })
});
app.listen(process.env.PORT, ()=>
{

    mongoose.connect("mongodb+srv://aryanben:PasswordMongoDB@cluster5.ychod.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",()=>{
        console.log("connected");
    });
})
