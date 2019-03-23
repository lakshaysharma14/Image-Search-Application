import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:
    {
        Authorization: 'Client-ID 432a41c655b51204df657315256e00ff340b0ffcf0a8ea7232656490578e16cd'
    }

})