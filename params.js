module.exports = {
    COINS: {
        
    },
    API: {
        COINGECKO:{
            GET: {
                GET_ALL_COINS: () => `https://api.coingecko.com/api/v3/coins/list`,
                GET_COIN_BY_ID: (id) => `https://api.coingecko.com/api/v3/coins/${id}`
            }
        }
    }
}