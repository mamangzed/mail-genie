const axios = require('axios');
const { parseEmails, parseMessage } = require('./emailParser');
const {url} = require('./url')


const listEmails = async (emailFull) => {
    try {
        const [email, domain] = emailFull.split('@');
        const response = await axios.get(`${url}/inbox${Math.floor(Math.random() * 9) + 1}`,{
            headers: {
                'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
                'accept-encoding': 'gzip, deflate, br, zstd',
                'accept-language': 'en-US,en;q=0.9',
                'cache-control': 'max-age=0',
                'cookie': `_gid=GA1.2.2095327855.1735069411; __gads=ID=52c0ef95ece1dcd3:T=1723296851:RT=1735074556:S=ALNI_MY-N05jLZ5xHVJagROLPVaB7iMLRw; __gpi=UID=00000ebb7726ad8a:T=1723296851:RT=1735074556:S=ALNI_MZmpm9iDReVIrzNmydV67PPYNJhQw; __eoi=ID=50b40b8c429867d1:T=1723296851:RT=1735074556:S=AA-AfjYcohPcYMEyMXK2GgCw44zC; embx=%5B%${email}%40${domain}%22%2C%${email}%40${domain}%22%5D; _gat_gtag_UA_35796116_32=1; _ga=GA1.2.1660632963.1723296850; surl=${domain}/${email}; FCNEC=%5B%5B%22AKsRol-Lci8hCqIvO_xclbprHLQSsPjFOFt6Pu7w2kyTOo7Ahz83hFD5UlFG9kiq9pVZq23iGbdhLjdGucomp2CbWu2ZinNJRZYX3Xox3-XDAQ1imUiw8JveMOGFIHmDhh-EG1jHAFbEhKA-9N1aQd-DPg26Dn263A%3D%3D%22%5D%5D; _ga_1GPPTBHNKN=GS1.1.1735073618.15.1.1735074641.40.0.0`,
                'priority': 'u=0, i',
                'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"',
                'sec-fetch-dest': 'document',
                'sec-fetch-mode': 'navigate',
                'sec-fetch-site': 'same-origin',
                'sec-fetch-user': '?1',
                'upgrade-insecure-requests': '1',
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36'
            }
        });
        const result = parseEmails(response.data, url);
        return result;
    } catch (error) {
        console.error('Error:', error.message);
        return false;
    }
};

const getEmailBody = async (emailFull, inboxid) => {
    try {
        const [email, domain] = emailFull.split('@');
        const response = await axios.get(`${url}/inbox/${inboxid}`,{
            headers: {
              'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
              'accept-encoding': 'gzip, deflate, br, zstd',
              'accept-language': 'en-US,en;q=0.9',
              'cache-control': 'max-age=0',
              'cookie': `_gid=GA1.2.1369039519.1736530908; ai_user=lKVsKHr4b8GvVytKPVfzB6|2025-01-10T17:41:48.833Z; embx=%5B%22${email}%40${domain}%22%2C%22kunyukah%40suksesboss.com%22%2C%22enrique.test%40suksesboss.com%22%2C%22${email}%40gmailku.my.id%22%2C%22meta.ankunding%40konterkulo.com%22%2C%22catalina.corwin%40gmailku.my.id%22%2C%22mamangzed%40konterkulo.com%22%2C%22kudanil%40konterkulo.com%22%5D; __gads=ID=52c0ef95ece1dcd3:T=1723296851:RT=1736542676:S=ALNI_MY-N05jLZ5xHVJagROLPVaB7iMLRw; __gpi=UID=00000ebb7726ad8a:T=1723296851:RT=1736542676:S=ALNI_MZmpm9iDReVIrzNmydV67PPYNJhQw; __eoi=ID=50b40b8c429867d1:T=1723296851:RT=1736542676:S=AA-AfjYcohPcYMEyMXK2GgCw44zC; _ga=GA1.1.1660632963.1723296850; ai_session=AQ+ShhvUZcXRg5lG2GlF+e|1736542523727|1736542788349; FCNEC=%5B%5B%22AKsRol-aUyq32TsTyggEovHrRmyDTjZ_VGwgbRBRvy250FcXIrfSYqQ0a6t83O84cn_HYFgW-KDK9CUntldBfu8xs1kJLA2Ze-7XKO59e96N347KEzNjabEg-95u08mMqrBx-LCiWvR7IXiAAYEPGzT1NwW3vlIQMA%3D%3D%22%5D%5D; _ga_1GPPTBHNKN=GS1.1.1736542674.21.1.1736542791.56.0.0; surl=${domain}%2F${email}%2F${inboxid}`,
              'priority': 'u=0, i',
              'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
              'sec-ch-ua-mobile': '?0',
              'sec-ch-ua-platform': '"Windows"',
              'sec-fetch-dest': 'document',
              'sec-fetch-mode': 'navigate',
              'sec-fetch-site': 'same-origin',
              'sec-fetch-user': '?1',
              'upgrade-insecure-requests': '1',
              'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36'
            }
          });
        const msg = parseMessage(response.data);
        return msg;
    } catch (error) {
        console.error('Error in getEmailBody:', error.message);
        return false;
    }
};

module.exports = { listEmails, getEmailBody };
