import axios from 'axios';

// baseUrl = your machine ip with backend port

const api = axios.create({
    baseURL: 'http://192.168.0.108:3333',
});

export default api;