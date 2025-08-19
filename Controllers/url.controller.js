const shortid = require("shortid");
const UrlModel = require("../Models/url")

async function Shortener(req, res) {
  let data = req.body;
  let { originalUrl } = data;

    if (!originalUrl || originalUrl.length === 0) {
        // return res.status(400).json({ message: "Please Enter Url" });
        return res.render('index', { err : 'Please Enter URL'});
    }

    // checking if url is valid or not
    let validateUrl = originalUrl
    if (!originalUrl.startsWith('http://') && !originalUrl.startsWith('https://')) {
        validateUrl = `https://${originalUrl}`
    }

    // adding short id and validated url 
    let short= shortid.generate() 
    try {
        let dbRes = await UrlModel.create({
            shortId : short,
            redirectURL : validateUrl,
            visitHistory : []
        })
        

        // res.status(200).json({
        //     message: "Success",
        //     data: dbRes,
        // });
        let {shortId} = dbRes
        res.render("index", {shortId})
    } catch (error) {
        // res.status(400).json({
        //     message : 'Error',
        //     error
        // })
        res.render('index', { err : "Already Exists"})
    }
    
   

}

module.exports = {Shortener};
