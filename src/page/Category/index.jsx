import ProductList from '@/components/Product/ProductList'
import { useParams } from 'react-router'
import {Row, Col} from 'antd'
import useFetch from "@/customhooks/useFetch"
import {getAllCategories} from '@/services/category'
import { Link } from 'react-router-dom'

export default function Category(){
    const params = useParams()
    const {data, setData, pagination, setPagination, loading} = useFetch(()=>{
        return getAllCategories()
    })

    const categories = data?.map(item=>{
        return <div key={item?.id}>
            <Link to={`/danh-muc/${item?.attributes?.slug}`}> {item?.attributes?.name} </Link>
        </div>
    })

    return (
        <>
            <Row>
                <Col span={4}>
                    <h1>Danh muc</h1>
                    {categories}
                </Col>
                <Col span={20}>
                    <ProductList query={`filters[idCategories][slug]=${params.categorySlug}`}></ProductList>
                </Col>
            </Row>
        </>
    )
}