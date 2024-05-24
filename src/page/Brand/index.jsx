import ProductList from '@/components/Product/ProductList'
import { useParams } from 'react-router'
import {Row, Col} from 'antd'
import useFetch from "@/customhooks/useFetch"
import { getAllBrand } from '@/services/brand'
import { Link } from 'react-router-dom'

export default function Brand(){
    const params = useParams()
    const {data, setData, pagination, setPagination, loading} = useFetch(()=>{
        return getAllBrand()
    })

    const brands = data?.data?.map(item=>{
        return <div key={item?.id}>
            <Link to={`/thuong-hieu/${item?.attributes?.name}`}> {item?.attributes?.name} </Link>
        </div>
    })

    return (
        <>
            <Row>
                <Col span={4}>
                    <h1>Thuong hieu</h1>
                    {brands}
                </Col>
                <Col span={20}>
                    <ProductList query={`filters[idBrand][name]=${params.nameBrand}`}></ProductList>
                </Col>
            </Row>
        </>
    )
}