import useFetch from "@/customhooks/useFetch"
import { getProducts } from "@/services/product"
import { Row, Col, Card, Pagination } from 'antd'
import './ProductList.scss'
import { Link } from 'react-router-dom'
const {VITE_BASE_API_URL} = import.meta.env
const { Meta } = Card;
export default function ProductList(props){
    const query = props.query ? props.query : ''
    
    const {data, setData, pagination, setPagination, loading} = useFetch(()=>{
        return getProducts(query, pagination.page, pagination.pageSize, 'price')
    }, query)
  
    return (
        <>
            <Pagination pageSize={pagination.pageSize} current={pagination.page} total={pagination.total} 
                pageSizeOptions = {[6, 12, 18, 24]}
                showSizeChanger={true}
                onChange={(page, pageSize)=>{
                    setPagination({
                        ...pagination,
                        page: page,
                        pageSize: pageSize
                    })
                }}
            />
            <Row gutter={[20, 10]}>
            {
                data?.data?.map(item=>{
                    let imgUrl = VITE_BASE_API_URL + item?.attributes?.image?.data[0]?.attributes?.url
                    let title = item?.attributes?.name
                    let description = item?.attributes?.description
                    return (
                        <Col span={4} key={item?.id}>
                            <Link to={`/sanpham/${item?.attributes?.slug}`}>
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