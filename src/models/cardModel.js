const mongoose = require('mongoose')

const cardSchema = new mongoose.model({
    cardNumber : {
        type : String
    },
    cardNumber : {
        type : String,
        enum : ["REGULAR" , "SPECIAL"]
    },
    customerName : {
        type : String
    },
    status : {
        type : String,
        default : "Active"
    },
    vision : {
        type : String
    },
    customerID : {
        type : String,
        ref : customer
    }
}, {tiemstamps : true})

module.exports = mongoose.model('card' , cardSchema)