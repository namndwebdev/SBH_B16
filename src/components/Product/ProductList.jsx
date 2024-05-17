import useFetch from "@/customhooks/useFetch"
import { getProducts } from "@/services/product"
import { Row, Col, Card } from 'antd'
import './ProductList.scss'
import Link from "antd/es/typography/Link"
const {VITE_BASE_API_URL} = import.meta.env
const { Meta } = Card;
export default function ProductList(){
    
    const {data, setData, pagination, setPagination, loading} = useFetch(()=>{
        return getProducts(1, 10, 'price')
    })
    console.log(data);
    return (
        <>
            <Row gutter={[20, 10]}>
            {
                data?.map(item=>{
                    let imgUrl = VITE_BASE_API_URL + item?.attributes?.image?.data[0]?.attributes?.url
                    let title = item?.attributes?.name
                    let description = item?.attributes?.description
                    return (
                        <Col span={6} key={item?.id}>
                            <Link to="#">
                                <Card
                                    hoverable
                                    cover={<img alt="example" src={imgUrl} />}
                                    loading={loading}
                                >
                                    <Meta title={title} description={description?.substring(0, 50) + '...'} />
                                </Card>
                            </Link>
                        </Col>
                    )
                })
            }
            </Row>
        </>
    )
}