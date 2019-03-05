const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

router.get('/', (req, res) => {
    let sqlText = `SELECT * FROM beerratings ORDER BY id DESC`
    pool.query(sqlText)
    .then(response => {
        res.send(response.rows)
        console.log(response)
    })
    .catch(err => {
        console.log('Error getting all ratings', err)
    })
})



module.exports = router;