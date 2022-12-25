const valid = function(value) {
    if(typeof value == undefined || typeof value == null) return false
    if(typeof value == "string" && value.trim().length > 0 ) return true
}

const validName = function(value) {
    const nameRegex = /^[a-zA-Z]{1,}$/
    if(nameRegex.test(value)) return true
}

const validMobile = function(value) {
    const mobileRegex = /^[0-9]{10}$/
    if(mobileRegex.test(value)) return true
}

const validMail = function(value) {
     const mailRegex = /^[a-z0-9]{1,}@[a-z]{1,}[.]{1}[a-z]{1,5}$/
     if(mailRegex.test(value)) return true
}

const validStatus = function(value) {
    const arr = ["ACTIVE", "INACTIVE"]
    if(value.includes(...arr)) return true
}

const validId = function(value) {
    const idRegex = /^[UUID]{4}[0-9]{3}$/
    if(idRegex.test(value)) return true
}

module.exports = {valid , validName , validMobile , validMail , validStatus , validId}