import { useEffect, useState } from "react";

export default function useFetch(layData){
    const [data, setData] = useState()
    const [pagination, setPagination] = useState()
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        layData()
        .then(res=>{
            let ketqua = res.data
            setData(ketqua.data)
            setPagination(ketqua.meta.pagination)
        })
        .catch(err=>{})
        .finally(()=>{
            setLoading(false)
        })
    }, [])

    return {data, setData, pagination, setPagination, loading}
}