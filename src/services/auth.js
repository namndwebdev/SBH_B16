import axios from 'axios'
export const login = (email, password)=>{
    return axios.post('/auth/local', {
        identifier: email,
        password: password
    })
}

export const signup = (newUser)=>{
    return axios.post('/auth/local/register', newUser)
}