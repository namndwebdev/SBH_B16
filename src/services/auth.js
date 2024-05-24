import axios from 'axios'
export const login = (email, password)=>{
    console.log(email, password);
    return axios.post('/auth/local', {
        identifier: email,
        password: password
    })
}