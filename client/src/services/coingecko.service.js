import axios from 'axios';

export const getAllCoins = async () => {
    let res = await axios.get('/api/coingecko/all');
    if(res.status !== 200){
        return false;
    }

    return res.data;
}

export const getCoinById = async (id) =>{
    let res = await axios.get(`/api/coingecko/${id}`);
    if(res.status !== 200){
        return false;
    }

    return res.data;
}