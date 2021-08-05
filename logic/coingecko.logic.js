const axios = require('axios');
const PARAMS = require('../params.js');

const getAllCoins = async (cb) => {
    try {
        let res = await axios.get(PARAMS.API.COINGECKO.GET.GET_ALL_COINS())
        if (res.status !== 200) {
            return false;
        }

        cb(null, res.data);
    } catch (e) {
        cb(e);
    }
}

const getCoinById = async (id, cb) => {
    try {
        let res = await axios.get(PARAMS.API.COINGECKO.GET.GET_COIN_BY_ID(id))
        if (res.status !== 200) {
            return false;
        }

        cb(null, res.data);
    } catch (e) {
        cb(e);
    }
}


module.exports = {
    getAllCoins: getAllCoins,
    getCoinById: getCoinById
}