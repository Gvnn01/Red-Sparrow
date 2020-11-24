const express = require('express');
const router = express.Router();
const validUrl = require('valid-url')
const shortid = require('shortid')
const config = require('config')


const Url = require('../models/Url');

router.post('/shorten', async (req, res) => {
  const longUrl = req.body.url
  const baseUrl = config.get('baseUrl')

  if(!validUrl.isUri(baseUrl)) {
    return res.status(401).json('Invalid base url')
  }
  const urlCode = shortid.generate();

  if(validUrl.isUri(longUrl)) {
    try {
      let url = await Url.findOne({longUrl})
      if(url) {
        res.render('finished.html', {url}) 
      } else {
        const shortUrl = baseUrl + '/' + urlCode;
        url = new Url({
          longUrl,
          shortUrl,
          urlCode,
          date: new Date()
        });
        console.log(longUrl)
        await url.save();
        res.render('finished.html', {url});
      }    
    } catch(err) {
      console.error(err)
      res.status(500).json('Server error');
    }
  } else {
    console.log(longUrl)
    res.status(401).json('Invalid long url')
  }
})

module.exports = router;