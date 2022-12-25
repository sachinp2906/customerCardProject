const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    firstName : {
        type : String
    },
    lastName : {
        type : String
    },
    mobileNumber : {
        type : String
    },
    DOB : {
        type : Date
    },
    emailID : {
        type : String
    },
    address : {
        type : String
    },
    customeId : {
        type : String
    },
    status : {
        type : String,
        enum : ["Active" , "Inactive"]
    }
}, {timestamps : true})

module.exports = mongoose.model('customer' , customerSchema)