const express = require('express');
const router = express.Router();
const propertySchema = require('../models/propertySchema');


router.get('/api/featuredProperties', async (req, res)=>{
    const listings = await propertySchema.find({ featured: true});
    try{
        if(!listings || listings.length <= 0) {
            return res.status(400).json({message: "No featured listings available"});
        };

        res.status(200).json({
            message:`${listings.length} feautured listings were found,`,
            featuredListings: listings
        }); 
    } catch(error){
        return res.status(500).json({message: "Internal Server Error"});
    }
});

module.exports = router;