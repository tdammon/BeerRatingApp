const axios = require('axios');
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const aws = require('aws-sdk');

const s3 = new aws.S3();

aws.config.update({
    accessKeyId: 'AKIAIQVX2V4Q3IXQGWZA',
    secretAccessKey: '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',
    region: 'us-east-2',
});

//POST request to Amazon API
router.post('/picture', (req,res)=>{
    let params = {
        Bucket: 'beerphoto',
        Key: '',
        Expires: 60,
        ContentType: '',
    }
    let picture = req.body.picture;
    let userid = req.body.id;
    console.log(picture, userid)
    axios.post(`https://s3.console.aws.amazon.com/s3/buckets/beerphoto/?region=us-east-2&tab=overview#`)
    .then(response => {
        
    }).catch(err=> {
        console.log(err)
    })
})

router.post('/picture', (req, res) => {
    let picture = req.body.picture;
    let userid = req.body.id;
    console.log(picture, userid)
    let sqlText = `INSERT INTO beerpictures (picture, userid) VALUES ($1, $2)`;
    pool.query(sqlText, [picture, userid])
})

module.exports = router;