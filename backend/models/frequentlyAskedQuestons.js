//FAQ model 
const mongoose = require("mongoose");


const FAQSchema = new mongoose.Schema({
    title: {type:String, required:true},
    question: {type:String, required:true},
    context: {type:String, required:true},
}, {timestamps:true});

const frequentlyAskedQuestions = mongoose.model("frequentlyaskedquestions", FAQSchema);
module.exports = frequentlyAskedQuestions;