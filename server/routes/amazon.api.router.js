const express = require('express');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const aws = require('aws-sdk');

const s3 = new aws.S3({
    region: 'us-east-2',
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    
});

router.get('/', (req,res)=>{
    const params = {
        Bucket: 'beerphotos',
        Key: req.query.filename,
        Expires: 600,
        ContentType: req.query.filetype,
        ACL: 'public-read',
    }
    s3.getSignedUrl('putObject', params, function(err, data) {
        if (err) {
            console.log('Error Getting Signed URL', err);
            return err;
        } else {
            console.log('This is the data', data)
            res.send(data);
        }
    })
    
})

module.exports = router;
