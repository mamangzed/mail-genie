const cheerio = require('cheerio');
const he = require('he');
const { htmlToText } = require('html-to-text');

const parseEmails = (html, url) => {
    const $ = cheerio.load(html);
    const emailArray = [];

    $('#email-table > a').each((index, element) => {
        const from = $(element).find('.from_div_45g45gg').text().trim();
        const subject = $(element).find('.subj_div_45g45gg').text().trim();
        const time = $(element).find('.time_div_45g45gg').text().trim();
        const link = `${url}${$(element).attr('href')}`; 
        const splitLink = link.split('/');

        emailArray.push({ 
            from, 
            subject, 
            time, 
            link,
            domain: splitLink[3], 
            username: splitLink[4], 
            email: `${splitLink[4]}@${splitLink[3]}`, 
            inboxid: splitLink[5]
        });
    });

    return emailArray;
};

// Fungsi untuk mem-parsing isi pesan email
const parseMessage = (html) => {
    const $ = cheerio.load(html);
    const messageElement = $('#message');

    const [received, created] = messageElement
        .find('span').eq(7)
        .text()
        .trim()
        .split('\n')
        .map(item => item.replace('Created:', '').trim());

    const to = messageElement.find('span').eq(1).text().trim();
    const from = messageElement.find('span').eq(3).text().trim();
    const subject = messageElement.find('h1').text().trim();

    const bodyElement = $('.e7m.col-md-12.ma1');
    const bodyHtml = bodyElement.find('.e7m.mess_bodiyy > div[dir="ltr"]').html().trim();
    const bodyText = htmlToText(bodyElement.find('.e7m.mess_bodiyy > div[dir="ltr"]').text().trim(), {
        wordwrap: false
    });

    return { 
        to, 
        from, 
        subject, 
        received, 
        created, 
        body: { 
            html: he.decode(bodyHtml), 
            plaintext: bodyText 
        } 
    };
};

module.exports = { parseEmails, parseMessage };
