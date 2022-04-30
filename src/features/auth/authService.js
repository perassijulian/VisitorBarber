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

const getAccount = async (userData) => {
    const response = await axios.get(API_URL+'my-account/', userData);
    console.log('authService user: ', userData);
//this should be done with headers from req but now working with localstorage its working   
    return userData;
}

const authService = {
    register,
    logout,
    login,
    getAccount,
} 

export default authService;