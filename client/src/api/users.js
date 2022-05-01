import axios from "axios";

const URL = 'http://localhost:3001/user';

export const signupUser = (user) => axios.post(`${URL}/signup`, user);
export const loginUser = (creds) => fetch(`${URL}/login`, {
    method: 'POST',
    headers: { 
        'Content-Type':'application/json' 
    },
    body: JSON.stringify(creds)
})