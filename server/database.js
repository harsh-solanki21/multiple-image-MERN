'use strict'
const mongoose = require('mongoose')

module.exports = () => {
  mongoose
    .connect(
      'mongodb+srv://harsh:harsh@magicalbricks.zcouf.mongodb.net/MagicalBricks?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,
      }
    )
    .then(() => console.log('Connected to Mongodb......'))
}
