import axios from 'axios'
export function getProducts(page, size, fSort){
    return axios({
        url: `/products?populate=*&pagination[pageSize]=${size}&pagination[page]=${page}&sort=${fSort}:desc`
    })
}