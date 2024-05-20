import axios from 'axios'
export function getProducts(query, page, size, fSort){
    return axios({
        url: `/products?${query}&populate=*&pagination[pageSize]=${size}&pagination[page]=${page}&sort=${fSort}:desc`
    })
}

export function getProductBySlug(slug){
    return axios({
        url: `/products/${slug}?populate=*`
    })
}