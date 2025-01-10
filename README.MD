
# **EmailTemp Usage Guide**

This guide explains how to use the provided utility functions for fetching email domains, generating random emails, listing emails, and retrieving the email body.

---

## **Prerequisites**
Before using the utility, ensure the following:
- Node.js version 14 or higher is installed.
- The required modules/functions are properly exported from `./index`:
  - `listEmails`: Fetches the list of emails associated with an email address.
  - `getEmailBody`: Retrieves the content of an email by its `inboxid`.
  - `getDomains`: Retrieves a list of available email domains.
  - `randomEmail`: Generates a random email address using a specified domain.

---

## **Setup**

1. Ensure all required functions are implemented and exported in `./index.js`.

2. Install any necessary dependencies (if applicable):
   ```bash
   npm install
   ```

3. Save the following example code in a file (e.g., `example.js`) and run it using Node.js.

---

## **Code Example**

Here is a complete example of how to use the utility functions:

```javascript
const { listEmails, getEmailBody, getDomains, randomEmail } = require('mail-genie');

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
```

---

## **Explanation**

### **Step 1: Get All Available Domains**
- Use the `getDomains` function to retrieve a list of available email domains.
- Example output:
  ```javascript
  ["example.com", "test.com", "demo.com"]
  ```

### **Step 2: Select a Random Domain**
- Randomly select one domain from the retrieved list using `Math.random()`.

### **Step 3: Generate a Random Email**
- Use the `randomEmail` function, passing the selected domain as a parameter.
- Example output:
  ```javascript
  { email: "randomuser@example.com" }
  ```

### **Step 4: List Emails**
- Use the `listEmails` function, passing the generated email address to retrieve the list of emails associated with it.
- Example output:
  ```javascript
  [
    { inboxid: 123, subject: "Welcome!" },
    { inboxid: 124, subject: "Your Invoice" }
  ]
  ```

### **Step 5: Get Email Body**
- Use the `getEmailBody` function, passing the email address and the `inboxid` of the first email in the list to retrieve the email's content.
- Example output:
  ```javascript
  "Welcome to our service! We're glad to have you."
  ```

---

## **Error Handling**

- **No Domains Available**: 
  If `getDomains` returns an empty array, the program will not proceed and should handle this with an error message.

- **No Emails Found**:
  If `listEmails` returns an empty array, it will log `"No emails found for this address."`.

- **Invalid Parameters**:
  Ensure `randomEmail`, `listEmails`, and `getEmailBody` are called with valid arguments.

---

## **Expected Output**

### Example Output:
```plaintext
Available Domains: ["example.com", "test.com", "demo.com"]
Randomly Selected Domain: test.com
Generated Random Email: { email: "randomuser@test.com" }
List of Emails: [ { inboxid: 123, subject: "Welcome!" }, { inboxid: 124, subject: "Your Invoice" } ]
Email Body: "Welcome to our service! We're glad to have you."
```

---

## **Run the Example**
To execute the example:
```bash
node example.js
```

---

## **License**
This code is free to use and modify for your projects. No specific license is applied.
