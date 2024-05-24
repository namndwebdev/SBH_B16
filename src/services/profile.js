import axios from 'axios'
export function getProfile(){
    return axios.get('users/me?populate=role')
}