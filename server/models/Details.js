const mongoose=require('mongoose');
const {Schema} = mongoose;

const detailsSchema=new Schema({
    title: String,
    country: String,
    city: String,
    web: String,
    description: String,
    dataSent: Date,
    email: String,
    _user: {type: Schema.Types.ObjectId, ref:'User'}
})

mongoose.model('details',detailsSchema)