const mongoose = require('mongoose');

const mongodbURI = process.env.MONGODB_URI ||
'mongodb+srv://Julius:xf32%2Fa.@cluster0.xjs4t.mongodb.net/StartUndEndDaten?retryWrites=true&w=majority'
console.log("mongoose: connecting to "+mongodbURI)

mongoose.connect(mongodbURI, { useNewUrlParser: true, useUnifiedTopology: true })
