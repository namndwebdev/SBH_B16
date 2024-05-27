import axios from "axios"

export const createOrder = (order)=>{
    
    return axios.post('/orders', {
        data: order
    })
}