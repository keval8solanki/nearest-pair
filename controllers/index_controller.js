const requests = require('requests')
const axios = require('axios');
const { getKm } = require('../utils/helper');
const { getClosestPair } = require('./service');

exports.getData = async (req, res, next) => {
    const url = 'https://api.tomtom.com/search/2/search/Dominoz pizza mumbai.json?limit=10&radius=5000&key=qgpvFTvZtPLXuto6bsi81hezbRuBTi9Y'
    try {
        const { data } = await axios.get(url, {
            headers: { content_type: "json", accept: "application/json" }
        })
        const pair = getClosestPair(data.results)

        res.send(pair);
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}

exports.findnearestTwoLocation = () => {

    let bubbleSort = (inputArr) => {
        let len = inputArr.length;
        let swapped;
        do {
            swapped = false;
            for (let i = 0; i < len; i++) {
                if (inputArr[i] > inputArr[i + 1]) {
                    let tmp = inputArr[i];
                    inputArr[i] = inputArr[i + 1];
                    inputArr[i + 1] = tmp;
                    swapped = true;
                }
            }
        } while (swapped);
        return inputArr;
    };

}