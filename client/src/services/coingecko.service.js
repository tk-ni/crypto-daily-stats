import axios from 'axios';
import ENV from '@/env.js';

export const getAllCoins = async () => {
    let res = await axios.get(ENV.API.COINGECKO.GET.GET_ALL_COINS)
    if (res.status !== 200) {
        return false;
    }

    return res.data;
}