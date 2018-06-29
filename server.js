const express =require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');

const alerts=require('./routes/api/alerts');
const app =express();

//body parser middleware

app.use(bodyParser.json());

const db=require('./config/keys').mongoURI;

mongoose.connect(db)
.then(()=>console.log('mongoDB connected...'))
.catch(err=>console.log(err));

// app.use(routes);

// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/over_dont");



app.use('/api/alerts', alerts);

const port=process.env.PORT || 8000;

app.listen(port, ()=> console.log('Listening on port ' + port));
