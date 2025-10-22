const mongoose = require('mongoose');

//property model 
const propertySchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: { type: String },
  type: { type: String },
  status: { type: String },
  tags: [String],
  yearBuilt: { type: Number },
  price: { type: Number },
  rentalEstimate: { type: Number },
  featured: { type: Boolean, default: false },
  sponsorshipTier: { type: String },
  thumbnail: { type: String },
  gallery: [String],
  floorPlans: [String],
  virtualTour: { type: String },
  address: { type: String },
  city: { type: String },
  state: { type: String },
  zip: { type: String },
  geo: {
    lat: { type: Number },
    lng: { type: Number },
  },
  walkScore: { type: Number },
  transitScore: { type: Number },
  bikeScore: { type: Number },
  nearbyPlaces: [String],
  bedrooms: { type: Number },
  bathrooms: { type: Number },
  lotSize: { type: String },
  buildingSize: { type: String },
  amenities: [String],
  energyEfficiency: {
    rating: { type: String },
    solarPanels: { type: Boolean },
    insulation: { type: String },
  },
  fees: {
    hoa: { type: Number },
  },
  monthlyCosts: {
    utilities: { type: Number },
    taxes: { type: Number },
  },
  initialCosts: {
    downPayment: { type: Number },
    closingCosts: { type: Number },
  },
  monthlyExpenses: {
    mortgage: { type: Number },
    insurance: { type: Number },
  },
  mortgageOptions: [
    {
      type: { type: String },
      rate: { type: Number },
    }
  ],
  priceHistory: [
    {
      date: { type: Date },
      price: { type: Number },
    }
  ],
  brokerCommission: { type: String },
  agent: {
    name: { type: String },
    phone: { type: String },
    email: { type: String },
    agency: { type: String },
  },
  engagement: {
    views: { type: Number, default: 0 },
    favorites: { type: Number, default: 0 },
    reviews: [
      {
        user: { type: String },
        rating: { type: Number },
        comment: { type: String },
      }
    ],
  },
  meta: {
    listingDate: { type: Date },
    lastUpdated: { type: Date },
  },

}, { timestamps: true });

propertySchema.set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
    return ret;
  },
});

 const Property = mongoose.model("Properties", propertySchema);
 module.exports = Property;
