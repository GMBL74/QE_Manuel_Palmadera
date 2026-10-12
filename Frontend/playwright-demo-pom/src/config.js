const path = require('path');
const dotenv = require('dotenv');

const result = dotenv.config({
    path: path.resolve(process.cwd(), '.env.dev')
});

console.log('DOTENV RESULT:', result);
console.log('BASE_URL:', process.env.BASE_URL);
console.log('USERNAME:', process.env.USERNAME);

// Credenciales y URL parametrizables por ambiente (ver .env.example)
module.exports = {
    baseUrl: process.env.BASE_URL || 'https://www.saucedemo.com',
    username: process.env.USERNAME || 'standard_user',
    password: process.env.PASSWORD || 'secret_sauce'
};
