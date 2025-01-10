const axios = require('axios');
const cheerio = require('cheerio');
const {url} = require('./url')

const getDomains = async () => {
    try {
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);

        const domains = [];
        $('#newselect .e7m.tt-suggestion p').each((index, element) => {
            const text = $(element).text().trim();
            domains.push(text);
        });
        return domains;
    } catch (error) {
        console.error('Error in getDomains:', error.message);
        return [];
    }
};

module.exports = { getDomains };
