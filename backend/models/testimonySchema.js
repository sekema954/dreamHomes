const mongoose = require('mongoose');

const TestimonialSchema = new mongoose.Schema({
    title: { type: String, required: true },
    context: { type: String, required: true },
    rating: { type: Number, required: true },
    author: { type: String },
    location: [
        {
            country: { type: String },
            city: { type: String },
        }
    ],
    profilePicture: { type: String } 
}, { timestamps: true });

const Testimonial = mongoose.model("Testimonial", TestimonialSchema);

module.exports = Testimonial;
