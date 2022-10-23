import axios from 'axios';
export const BASE_URL = 'http://localhost:8000';
export default axios.create({
    baseURL: BASE_URL,
});
// axios.defaults.headers.use(config => {
//     config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
//     return config;
// });