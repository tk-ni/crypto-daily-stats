class Crypto {
    constructor({ 
        name,
        platforms,
        categories,
        description,
        image,
        upvotes_24h,
        downvotes_24h,
        rank_by_market_cap,
        current_price,
        ath,
        atl,
        market_cap,
        high_24h,
        low_24h,
        price_change_percentage_24h,
        total_supply,
        max_supply,
        circulating_supply,
    }){
        this.name = name;
        this.platforms = platforms;
        this.categories = categories;
        this.description = description;
        this.image = image;
        this.upvotes_24h = upvotes_24h;
        this.downvotes_24h = downvotes_24h;
        this.rank_by_market_cap =rank_by_market_cap;
        this.current_price = current_price;
        this.ath = ath;
        this.alt= atl;
        this.market_cap = market_cap;
        this.high_24h = high_24h;
        this.low_24h = low_24h;
        this.price_change_percentage_24h = price_change_percentage_24h;
        this.total_supply = total_supply;
        this.max_supply = max_supply;
        this.circulating_supply = circulating_supply;
    }
}

module.exports = Crypto;