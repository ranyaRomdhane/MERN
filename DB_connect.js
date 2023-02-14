const mongoose=require('mongoose');

const DB_connect  = async() => {
    try{
const resultat = await mongoose.connect("mongodb+srv://ranya:wams13s3@cluster0.6gnrdwk.mongodb.net/?retryWrites=true&w=majority");
console.log('data bade is connected')
    }
    catch (error) {
console.log(error);
    }
};

module.exports= DB_connect;
