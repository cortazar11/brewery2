//const keys=require('../config/keys.js');
// const stripe= require('stripe')(keys.stripeSecretKey);
const stripe= require('stripe')(process.env.stripeSecretKey);
const requireLogin= require('../middlewares/requireLogin');

module.exports=app=>{
  app.post('/api/stripe',requireLogin,async (req,res)=>{
    
    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: '$% for 5 credits',
      source: req.body.id
    });

    
    req.user.credits+=5;
    const user=await req.user.save()

    res.send(user)
  })
}