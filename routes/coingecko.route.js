const express = require('express');
const router = express.Router();
const coingeckoLogic = require('./../logic/coingecko.logic');

router.get('/all', (req, res) => {
    coingeckoLogic.getAllCoins((e, coins) => {
        if (e) {
            res.status(500).send();
        } else {
            res.status(200).send(coins);
        }
    })
})

router.get('/:id', (req, res) => {
    if (req.params.id) {
        coingeckoLogic.getCoinById(req.params.id, (e, data) => {
            if (e) {
                res.status(500).send();
            } else {
                res.status(200).send(data);
            }
        })
    } else {
        res.status(500).send('Invalid Request.')
    }
})

module.exports = router;