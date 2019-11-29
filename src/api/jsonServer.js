import axios from 'axios';

export default axios.create({
    baseURL: 'http://127.0.0.1:3000'
    //baseURL: 'https://d99e7f2f.ngrok.io'
});
