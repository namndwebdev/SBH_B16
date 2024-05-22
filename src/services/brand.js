import axios from "axios"

export const getAllBrand = ()=>{
    return axios.get('/brands')
}