const express = require('express');
const router = express.Router();
const coingeckoLogic = require('./../logic/coingecko.logic');

router.get('/all', (req, res) => {
    coingeckoLogic.getAllCoins((e, coins) => {
        if (e) {
            res.status(500).send();
        }
        res.status(200).send(coins);
    })
})

module.exports = router;