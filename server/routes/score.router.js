const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

//GET settings from database filter by id
router.post('/', (req, res) => {
    let beer = req.body
    console.log(beer)
    let name = beer.name
    let notes = beer.notes;
    let user = beer.user_id
    let aroma = beer.ratings.Aroma;
    let color = beer.ratings.Color;
    let flavor = beer.ratings.Flavor;
    let finish = beer.ratings.Finish;
    let url = `https://d2hwsmj42oyfe7.cloudfront.net/${beer.url}`
    let brewery = beer.brewery;
    console.log(user)
    console.log(url)
    let sqlText = `INSERT INTO beerratings (name, aroma, color, flavor, finish, notes, userid, url, brewery) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`
    pool.query(sqlText,[name, aroma, color, flavor, finish, notes, user, url, brewery])
    .then( response => {
        res.send(response)
        // console.log(response)
    })
    .catch(err => {
        console.log('Error getting settings', err)
    })
});


router.get('/', (req, res) => {
    let beer = '%'+req.query.name+'%'
    console.log(beer)
    let sqlText = `SELECT name FROM beerlist WHERE LOWER(name) LIKE LOWER($1);`
    pool.query(sqlText, [beer])
    .then(response => {
        res.send(response.rows)
        console.log(response)
    })
    .catch(err => {
        console.log('Error finding Beer', err)
    })
})

router.get('/brewery', (req, res) => {
    let brewery = '%'+req.query.name+'%'
    console.log(brewery)
    let sqlText = `SELECT name FROM brewerylist WHERE LOWER(name) LIKE LOWER($1);`
    pool.query(sqlText, [brewery])
    .then(response => {
        res.send(response.rows)
        console.log(response)
    })
    .catch(err => {
        console.log('Error finding Brewery', err)
    })
})

router.post('/addBeer', (req,res)=>{
    let name = req.body.name;
    console.log(name)
    let sqlText = 'SELECT name FROM beerlist WHERE LOWER(name) = LOWER($1);'
    pool.query(sqlText, [name])
    .then(response => {
        console.log(response.rowCount)
        if(response.rowCount === 0){
            console.log(name);
            let sqlText = 'INSERT INTO beerlist("name") VALUES ($1);'
            pool.query(sqlText, [name])
            .then(response => {
                res.send(response)
            })
            .catch(err => {
                console.log('Error adding beer', err)
            })
        } else {
            res.send(response);
        }
    })
    .catch(err => {
        console.log('Error searching beer list', err)
    })
})

router.post('/addBrewery', (req,res)=>{
    let name = req.body.breweryName;
    console.log(name)
    let sqlText = 'SELECT name FROM brewerylist WHERE LOWER(name) = LOWER($1);'
    pool.query(sqlText, [name])
    .then(response => {
        console.log(response.rowCount)
        if(response.rowCount === 0){
            console.log(name);
            let sqlText = 'INSERT INTO brewerylist("name") VALUES ($1);'
            pool.query(sqlText, [name])
            .then(response => {
                res.send(response)
            })
            .catch(err => {
                console.log('Error adding brewery', err)
            })
        } else {
            res.send(response);
        }
    })
    .catch(err => {
        console.log('Error searching beer list', err)
    })
})


module.exports = router;