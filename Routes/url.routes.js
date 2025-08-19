const express = require('express')
const Router = express.Router()
const {Shortener} = require('../Controllers/url.controller')
const UrlModel = require('../Models/url')


Router.post('/', (req,res)=>{
    Shortener(req,res)
})


Router.get('/:shortId', async (req,res)=>{
    const shortId = req.params.shortId;
    const dbRes = await UrlModel.findOneAndUpdate(
        {
            shortId
        },
        { $push: {
            visitHistory: { timestamp: Date.now() }
        }}
    )
    
    
    // res.status(200).json({
        //     message : dbRes.redirectURL,
        //     data : dbRes
        // })
    res.redirect(dbRes.redirectURL)
})



module.exports = Router