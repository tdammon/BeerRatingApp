const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

router.get('/', (req, res) => {
    let bar = '%'+req.query.name+'%'
    console.log(bar)
    let sqlText = `SELECT name FROM barlist WHERE LOWER(name) LIKE LOWER($1);`
    pool.query(sqlText, [bar])
    .then(response => {
        res.send(response.rows)
        console.log(response)
    })
    .catch(err => {
        console.log('Error finding Bar', err)
    })
})