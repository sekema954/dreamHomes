const PORT = process.env.PORT || 3043;
const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const properties = require('./JSON/sample_real_estate_listings.json');
const { default: mongoose } = require('mongoose');
//routes
const getProperties = require('./routes/GetAllProperties');
const getFeaturedProperties = require('./routes/featuredProperties');

//initialize express
const app = express();

//pass middlewares
app.use(cors());
app.use(express.json());


//routes
app.use(getProperties);
app.use(getFeaturedProperties);



//connect to mongoose
mongoose.connect(process.env.MONGODB_URI, {})
    .then(()=>{console.log("%c Success:", "color:green; font-weight: bold;", "MongoDB connected successfully")})
    .catch((error)=>{
        console.error('Failed to connect to MongoDB', error),
        process.exit(1);
    }
);




//server frontend to backend SSR
app.use(express.static(path.join(__dirname, '../dist')));
app.get(/.*/, (req, res)=>{
    res.sendFile(path.resolve(__dirname, '../dist/index.html'));
});

app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`);
});
