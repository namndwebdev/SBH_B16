import { useParams } from 'react-router-dom'
import useFetch from "@/customhooks/useFetch"
import { getProductBySlug } from '@/services/product'
import { Carousel, Row, Col } from 'antd'
import './index.scss'
import "react-image-gallery/styles/scss/image-gallery.scss";
import ImageGallery from "react-image-gallery";
export default function ProductDetail(){
    const params = useParams()
    const {data, setData, pagination, setPagination, loading} = useFetch(()=>{
        return getProductBySlug(params.slug)
    })
   
    let images = data?.attributes?.image?.data?.map(item=>{
        let url = import.meta.env.VITE_BASE_API_URL + item?.attributes?.url
        return {
            original: url,
            thumbnail: url
        }
    })
    images = images ? images : []
    return (
        <>
            {
                data ? <div>
                    <h1>{data?.attributes?.name}</h1>
                    <h1>{data?.attributes?.price}</h1>
                    <h1>{data?.attributes?.oldPrice}</h1>
                    <Row>
                        <Col span={12}>
                            <ImageGallery items={images} />
                        </Col>
                    </Row>
                </div> : null
            }
        </>
    )
}