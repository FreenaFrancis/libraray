const express = require('express');
const app = express();
const cors=require('cors');
const bodyParser=require('body-parser');
const { default: mongoose } = require('mongoose');
const jwt=require('jsonwebtoken');
const cookieParser=require('cookie-parser');
const userModel=require('./models/userModel');
const userRoute=require('./Routes/userRoute')
const bookRouter=require('./Routes/bookRoute');
const port=7000;

app.use(express.json());


// Use body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({
  origin:["http://localhost:3000"],
  methods:["GET","POST","PUT","DELETE"],
  credentials:true
}
))
app.use('/api/user',userRoute);
app.use('/api/book', bookRouter); 

mongoose.connect('mongodb://127.0.0.1:27017/library'
, {
  useNewUrlParser: true, // Add this option to avoid deprecation warnings
  useUnifiedTopology: true, // Add this option for the new Server Discovery and Monitoring engine
})
  .then(() => console.log('MongoDB is connected'))
  .catch(err => console.log('mongodb is not connected',err));
  

  

app.listen(port,console.log(`the port is running on ${port}`))






