const mongoose=require('mongoose');

const requireLogin= require('../middlewares/requireLogin');
const requireCredits= require('../middlewares/requireCredits');

const Details=mongoose.model('details')

module.exports=app=>{
    app.post('/api/details', requireLogin,requireCredits,async (req,res)=>{
        const {title, country,city, web, description,email}=req.body

        const details= new Details ({
            title,
            country,
            city,
            web,
            description,
            dataSent: Date.now(),
            email,
            _user: req.user.id
        })

        try {
            await details.save();
            req.user.credits-=5;
            const user= await req.user.save()

            res.send(user)
        } catch (err){
            res.status(422).send(err)
        }
    })

    app.get('/api/details', async (req,res)=>{
                const details= await Details.find({})
                res.send(details)

               
    })
}