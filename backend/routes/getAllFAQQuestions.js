const express = require("express");
const questions = require('../models/frequentlyAskedQuestons');
const router = express.Router();



router.get('/api/frequentlyaskedquestions', async (req,res)=>{
    try{
        const faq = await questions.find();

        if(faq.length <= 0) {
            return res.status(400).json({message:'No questions found.'})
        };

        res.status(200).json({
            message: `${faq.length}, results found.`,
            data: faq
        });
    } catch(error) {
        return res.status(500).json({message:"Internal Server Error", error});
    }
});

module.exports = router;