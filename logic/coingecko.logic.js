const axios = require('axios');
const PARAMS = require('../params.js');
const Crypto = require('../models/Crypto.model');
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

        if(!res.data){
            return false;
        }

        let data = res.data;
        let modeledData = new Crypto({
            name: data.name,
            platforms: data.platforms,
            categories: data.categories,
            description: data.description.en,
            image: data.image.small,
            upvotes_24h: data.sentiment_votes_up_percentage,
            downvotes_24h: data.sentiment_votes_down_percentage,
            rank_by_market_cap: data.market_cap_rank,
            current_price: data.market_data.current_price.usd,
            ath: data.market_data.ath.usd,
            atl: data.market_data.atl.usd,
            market_cap: data.market_data.market_cap_rank,
            high_24h: data.market_data.high_24h.usd,
            low_24h: data.market_data.low_24h.usd,
            price_change_percentage_24h: data.market_data.price_change_percentage_24h,
            total_supply: data.market_data.total_supply,
            max_supply: data.market_data.max_supply,
            circulating_supply: data.market_data.circulating_supply,
        })

        cb(null, modeledData);
    } catch (e) {
        cb(e);
    }
}


module.exports = {
    getAllCoins: getAllCoins,
    getCoinById: getCoinById
}