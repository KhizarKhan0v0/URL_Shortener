const mongoose = require('mongoose')


function ConnectToDB(url){
    mongoose.connect(url).then(res => console.log('-------Connected To DB-------')).catch(err=> console.log(err))
}

module.exports = ConnectToDB
