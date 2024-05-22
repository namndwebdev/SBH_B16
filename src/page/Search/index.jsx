import './index.scss'
import {Row, Col} from 'antd'
import ProductList from '@/components/Product/ProductList'
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
export default function SearchPage(){
    const [query, setQuery] = useSearchParams()
    const [text, setText] = useState(query.get('ten'))
    useEffect(()=>{
        setText(query.get('ten'))
    }, [query.get('ten')])

    return (
        <>
            <Row>
                <Col>
                    <h1>Tim kiem</h1>
                </Col>
                <Col>
                    <ProductList query={`filters[name][$contains]=${text}`}/>
                </Col>
            </Row>
        </>
    )
}