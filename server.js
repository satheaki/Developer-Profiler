const express=require('express');
const mongoose=require('mongoose');

const user=require('./routes/api/users');
const profiles=require('./routes/api/profiles');
const posts=require('./routes/api/posts');

const app = express();

//DB Config
const db =require('./config/keys').mongoURI;

//Connect to mongo
mongoose.connect(db)
.then(()=>console.log('MongoDB connected'))
.catch(err=>console.log(err));

app.get('/',(req,res)=>res.send('Hello!'));

//Routes
app.use('/api/users',user);
app.use('/api/profile',profiles);
app.use('/api/posts',posts);

const port=process.env.PORT || 5000;

app.listen(port,()=> console.log(`server running on ${port}`));
