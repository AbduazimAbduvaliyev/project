const mongoose = require("mongoose")
const schema = mongoose.Schema

const db = new schema({
    title:{
        type: String,
        required: true

    },
    category: {
        type : String,
        required : true
    },
    country:{
        type:String,
        required : true
    },
    year:{
        type:Number,
        required : true
    },
    director:{
        type:String,
        required: true
    },
    imdb_score: {
        type: Number,

    }

   


})

module.exports = mongoose.model( "Movie", db)