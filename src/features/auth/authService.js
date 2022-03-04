import axios from 'axios';

const API_URL = '/user/';

//Register user
const register = async (userData) => {
    const response = await axios.post(API_URL+'signup/', userData);

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    };

    return response.data;
}
//Register worker
const registerWorker = async () => {
    const userData = JSON.parse(localStorage.getItem('user'));
    
    const response = await axios.post(API_URL+'worker/', userData);

    return response.data;
}

//Logout user
const logout = async () => {
    localStorage.removeItem('user');
}

//Login user
const login = async (userData) => {
    const response = await axios.post(API_URL+'login/', userData);

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    };

    return response.data;
}

const authService = {
    register,
    logout,
    login,
    registerWorker,
} 

export default authService;