import axios from 'axios';

const api = axios.create({
    //baseURL: 'http://192.168.15.4:3333',
   baseURL: 'http://192.168.0.8:3333',
});

export default api;