const { faker } = require('@faker-js/faker');

const randomEmail = (domain) => {
    const firstName = faker.name.firstName(); 
    const lastName = faker.name.lastName();  

    const cleanFirstName = firstName.replace(/[^a-zA-Z]/g, '');
    const cleanLastName = lastName.replace(/[^a-zA-Z]/g, '');

    const emailName = `${cleanFirstName.toLowerCase()}.${cleanLastName.toLowerCase()}`;
    
    return {
        name: emailName,
        email: `${emailName}@${domain}`,
    };
};

module.exports = { randomEmail };
