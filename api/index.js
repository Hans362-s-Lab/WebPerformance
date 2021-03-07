const fs = require('fs');

const gtmetrix = require('gtmetrix')({
    email: process.env.EMAIL,
    apikey: process.env.APIKEY,
    timeout: 10000
});

const testDetails = {
    url: process.env.URL,
    location: 1,
    browser: 3
};

gtmetrix.test.create(testDetails).then(data =>
    gtmetrix.test.get(data.test_id, 5000).then(data =>
        fs.writeFile('ct.json', JSON.stringify(data), console.log)));
