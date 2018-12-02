const request = require('request');
const fs = require('fs');

let token = fs.readFileSync('token.txt', 'utf8');
request(`https://api.vk.com/method/users.get?user_ids=210700286&fields=bdate&access_token=${token}&v=5.92`, function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});
