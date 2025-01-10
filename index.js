const { listEmails, getEmailBody } = require('./src/emailFetcher');
const { getDomains } = require('./src/domainFetcher');
const { randomEmail } = require('./src/utils');

module.exports = {randomEmail,listEmails,getEmailBody,getDomains}