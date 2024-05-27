import axios from "axios"

export const getOrders = ()=>{
    return axios.get('/my-orders')
}

export const createOrder = (order)=>{
    
    return axios.post('/orders', {
        data: order
    })
}
