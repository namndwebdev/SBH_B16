import { useEffect, useState } from "react";

export default function useFetch(layData, query){
    const [data, setData] = useState()
    const [pagination, setPagination] = useState({
        page: 1,
        pageSize: 12,
        total: 100
    })
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        layData()
        .then(res=>{
            let ketqua = res.data
            setData(ketqua.data)
            if(ketqua?.meta?.pagination){
                setPagination(ketqua.meta.pagination)
            }
        })
        .catch(err=>{})
        .finally(()=>{
            setLoading(false)
        })
    }, [pagination?.page, pagination?.pageSize, query])

    return {data, setData, pagination, setPagination, loading}
}