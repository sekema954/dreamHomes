const express = require('express');
const Testimonials = require('../models/testimonySchema');
const router = express.Router();


router.get('/api/testimonials', async (req,res)=>{
    try{
        const testimonials = await Testimonials.find();

        if(testimonials.length <= 0) {
            return res.status(404).json({message: "No testimonies found."})
        };


        const arrLength = testimonials.length;
        return res.status(200).json({
            message:`${arrLength } results were found`,
            data:testimonials,
        });
    } catch(err) {
        console.error('Internal Server Error', err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = router;
