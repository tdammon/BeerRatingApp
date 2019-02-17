const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

//GET settings from database filter by id
router.post('/', (req, res) => {
    let beer = req.body
    // let id = req.query.id;
    let name = beer.name
    let notes = beer.notes;
    let aroma = beer.ratings.Aroma;
    let color = beer.ratings.Color;
    let flavor = beer.ratings.Flavor;
    let finish = beer.ratings.Finish;
    //console.log(id)
    console.log(notes, aroma, color, flavor, finish)
    let sqlText = `INSERT INTO Beer (Name, Aroma, Color, Flavor, Finish, Notes) VALUES ($1, $2, $3, $4, $5, $6)`
    pool.query(sqlText,[name, aroma, color, flavor, finish, notes])
    .then( response => {
        res.send(response.rows)
    })
    .catch(err => {
        console.log('Error getting settings', err)
    })
});


module.exports = router;