import './index.scss'
import {Row, Col, Input} from 'antd'
import ProductList from '@/components/Product/ProductList'
import { useState } from 'react';
const { Search } = Input;
export default function SearchPage(){
    const [text, setText] = useState("")

    function onSearch(value){
        console.log('onSearch',value);
        setText(value)
    }

    return (
        <>
            <Row>
                <Col>
                    <h1>Tim kiem</h1>
                    <Search
                        placeholder="input search text"
                        onSearch={onSearch}
                        style={{
                            width: 200,
                        }}
                    />
                </Col>
                <Col>
                    <ProductList query={`filters[name][$contains]=${text}`}/>
                </Col>
            </Row>
        </>
    )
}