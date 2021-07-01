const express= require('express');
const mongoose=require('mongoose');
const cookieSession=require('cookie-session');
const passport=require('passport');
const bodyParser=require('body-parser');
require('./models/User');
require('./models/Details');
require('./services/passport');

const authRoutes=require('./routes/authRoutes');
const billingRoutes=require('./routes/billingRoutes');
const detailsRoutes= require('./routes/detailsRoutes');

const keys=require('./config/keys')

const app= express();

app.use(bodyParser.json())
app.use(cookieSession({
  maxAge: 30 * 24* 60 *60 *1000,
  // keys: [keys.cookieKey],
  keys: [process.env.cookieKey],
  secure: false
}))

app.use(passport.initialize())
app.use(passport.session())

// mongoose.connect(keys.mongoURI, {
mongoose.connect(process.env.mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
},()=>{
  console.log('mongoose connecteddddd')
});

authRoutes(app);
billingRoutes(app);
detailsRoutes(app);



const PORT= process.env.PORT || 5000;

app.listen(PORT,()=>{
  console.log('v1000')

  console.log('Start up more more')

 

 
})


