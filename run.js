const { listEmails, getEmailBody, getDomains, randomEmail } = require('./index');

(async () => {
    try {
        // Step 1: Get all available domains
        const allDomain = await getDomains(); 
        console.log("Available Domains:", allDomain);

        // Step 2: Select a random domain from the list
        const randomIndex = Math.floor(Math.random() * allDomain.length); 
        const randomDomain = allDomain[randomIndex];
        console.log("Randomly Selected Domain:", randomDomain);

        // Step 3: Generate a random email using the selected domain
        const email = randomEmail(randomDomain);
        console.log("Generated Random Email:", email);

        // Step 4: Fetch the list of emails for the generated email address
        const listEmail = await listEmails(email.email);
        console.log("List of Emails:", listEmail);

        // Step 5: Fetch the body of the first email in the inbox
        if (listEmail.length > 0) {
            const bodyEmail = await getEmailBody(email.email, listEmail[0].inboxid);
            console.log("Email Body:", bodyEmail);
        } else {
            console.log("No emails found for this address.");
        }
    } catch (error) {
        console.error("An error occurred:", error.message);
    }
})();
