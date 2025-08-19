const mongoose = require('mongoose')
const urlSchema=mongoose.Schema({
    shortId : {
        type : String,
        required : true,
        unique : true
    },
    redirectURL : {
        type: String,
        unique : true,
        required : true
    },
    visitHistory : [ {timestamp : {type : Number} }]

}, {timestamps : true})

const UrlModel = mongoose.model('url', urlSchema)
module.exports = UrlModel