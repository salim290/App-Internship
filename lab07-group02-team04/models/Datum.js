
const mongoose = require('mongoose')



const resultSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    name : String,
    description : String,
    start: String,
    end: String
})

module.exports = mongoose.model('Datum', resultSchema)


var data = {
      startDate: '08.25.2021',
      endDate: '08.01.2021'
  }
