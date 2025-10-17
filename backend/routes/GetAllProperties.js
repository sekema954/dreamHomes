const express = require('express');
const router = express.Router();
const propertySchema = require('../models/propertySchema');


router.get('/api/propertylistings', async (req, res)=>{
    const listings = await propertySchema.find();
    try{
        if(!listings || listings.length <= 0) {
            return res.status(400).json({message: "No listings available"});
        };

        res.status(200).json({
            message:`${listings.length} were found,`,
            listings: listings
        }); 
    } catch(error){
        return res.status(500).json({message: "Internal Server Error"});
    }
});

module.exports = router;