import { Link, useParams } from 'react-router-dom'
import useFetch from "@/customhooks/useFetch"
import { getProductBySlug } from '@/services/product'
import { Button, Row, Col, InputNumber, Form } from 'antd'
import './index.scss'
import "react-image-gallery/styles/scss/image-gallery.scss";
import ImageGallery from "react-image-gallery";
import { currency } from '@/helper/format'
import Markdown from 'react-markdown'
export default function ProductDetail(){
    
    const params = useParams()
    const {data, setData, pagination, setPagination, loading} = useFetch(()=>{
        return getProductBySlug(params.slug)
    })
   
    let images = data?.data?.attributes?.image?.data?.map(item=>{
        let url = import.meta.env.VITE_BASE_API_URL + item?.attributes?.url
        return {
            original: url,
            thumbnail: url
        }
    })
    images = images ? images : []
    let description  = data?.data?.attributes?.description?.replaceAll('/upload', import.meta.env.VITE_BASE_API_URL + '/upload')
    let brand = <Link to="#">{data?.data?.attributes?.idBrand?.data?.attributes?.name}</Link>
    let categories = data?.data?.attributes?.idCategories?.data?.map(item=>{
        return <Link to={`/danh-muc/${item?.attributes?.slug}`} key={item?.id}>{item?.attributes?.name}</Link>
    })
    return (
        <>
            {
                data?.data ? <div className='product'>
                    <h1 className='title'>{data?.data?.attributes?.name}</h1>
                  
                    <Row gutter={[20, 10]}>
                        <Col span={12}>
                            <ImageGallery items={images} />
                        </Col>
                        <Col span={12}>
                            <Row gutter={[30, 10]}>
                                <Col span={24}>Thương hiệu: {brand}</Col>
                                <Col span={24}>Danh mục: {categories}</Col>
                                <Col span={24} className='old-price'>{currency(data?.data?.attributes?.oldPrice)}</Col>
                                <Col span={24} className='price'>{currency(data?.data?.attributes?.price)}</Col>
                                <Col span={24}>
                                    <Form>
                                        <Form.Item
                                            name="quantity"
                                            label="Số lượng"
                                            initialValue={1}
                                        >
                                            <InputNumber
                                                className='quantity'
                                                min={1}
                                                max={data?.data?.attributes?.quantityAvailable}
                                            ></InputNumber>
                                        </Form.Item>
                                    </Form>
                                </Col>
                                <Col span={24}>Còn lại: {data?.data?.attributes?.quantityAvailable}</Col>
                                <Col span={24}>
                                    <Button type='primary' className='buy-btn' size='large'>Mua Ngay</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={24}>
                            <Markdown>
                                {description}
                            </Markdown>
                        </Col>
                    </Row>
                </div> : null
            }
        </>
    )
}