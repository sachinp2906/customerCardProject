const customerModel = require('../models/customerModel')
const {validName , valid , validMobile , validMail , validStatus , validId} = require('../validators/validation')

const createCustomer = async function(req ,res) {
    try{
    const data = req.body
    if(Object.keys(data).length == 0) {
        return res.status(400).send({status : false , message : "request body can not be empty"})
    }
    const {firstName , lastName , mobileNumber , DOB , emailID , address , customerID , status } = data
    if(!validName(firstName) || !valid(firstName)) return res.status(400).send({status : false , message : "name is not valid"})
    if(!validName(lastName) || !valid(lastName)) return res.status(400).send({status : false , message : "last name is not valid"})
    if(!validMobile(mobileNumber) || !valid(firstName)) return res.status(400).send({status : false , message : "mobile number is not valid"})
    if(!validMail(emailID) || !valid(firstName)) return res.status(400).send({status : false , message : "mail id is not valid"})
    if(!validId(customerID) || !valid(firstName)) return res.status(400).send({status : false, message : "customer id is not valid"})
    if(!validStatus(status) || !valid(firstName)) return res.status(400).send({status : false , message : "choose status from active and inactive"})
    
    const createData = await customerModel.create(data)
    return res.status(201).send({status : true , message : "data created succesfully" , data : createData})
    }
catch(err) {
    return res.status(500).send({status : false , message : err.message})
}
}