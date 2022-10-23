import axios from "../api/axios";
export default class AuthService {
    static async login(nickname, password) {
        return axios.post('/user/login', { nickname, password }).then(response => response.data);
    }
    static async register(nickname, password) {
        return axios.post('/user/registration', { nickname, password }).then(response => response.data);
    }
}