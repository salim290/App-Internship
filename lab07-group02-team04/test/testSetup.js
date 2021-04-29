//export MONGO_URL_USE_TEST='mongodb+srv://Julius:xf32%2Fa.@cluster0.xjs4t.mongodb.net/StartUndEndDaten?retryWrites=true&w=majority'


module.exports = {
    app: require("../app"),
    request: require("supertest"),
    ...require("../models/Datum")
}

const mongodbURI = 'mongodb+srv://Julius:xf32%2Fa.@cluster0.xjs4t.mongodb.net/TestData?retryWrites=true&w=majority'
 || process.env.MONGO_URL;


const mongoose = require('mongoose')

beforeAll((done) => {
    process.env.NODE_ENV = 'test'
    mongoose.set('bufferCommands', false)
    mongoose.connect(mongodbURI,
        { useNewUrlParser: true, useUnifiedTopology: true })
        .then(x =>{
            console.log('connected to mongoose: ' + mongodbURI);
            done();
        })
        .catch(error => console.log('error creating connection to: ' + mongodbURI + error))

    mongoose.connection.on('error', err => {
        console.log(err)
    })
});

afterAll(async () => {
    await mongoose.connection.close()
});
