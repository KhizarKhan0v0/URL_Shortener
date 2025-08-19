const express = require('express')
const Router = express.Router()
const UrlModel = require('../Models/url')

Router.get('/', (req,res)=>[
      res.render('index')
])

Router.get('/admin', async(req,res)=>{
      try {
            const urls = await UrlModel.find()
            // const urls = dbRes;
            console.log(urls)

            // res.status(200).json({
            //       message : 'working',
            //       data : urls
            // })
            res.render('admin', {
                  urls : urls
            } )
            
      } catch (error) {
            res.status(400).json({
                  message : 'Failed to get data from database',
                  error
            })
      }
      
})

module.exports=Router