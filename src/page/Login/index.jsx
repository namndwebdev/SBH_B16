import './index.scss'
import { Form, Row, Col, Input, Button } from 'antd'
import  { login } from '@/services/auth'
import { useDispatch } from 'react-redux'
import { setAuth } from '@/redux/auth'
import { useNavigate } from 'react-router'
import {Link} from 'react-router-dom'
const { Password } = Input
export default function Login(){
    const dispath = useDispatch()
    const nav = useNavigate()
    async function onSubmit(values){
        
        try {
            let res = await login(values.identifier, values.password)
            dispath(setAuth(res.data))
            nav('/')
        } catch (error) {
            console.log(error);
        }
    }
    return (               
        <>
            <Form onFinish={onSubmit}>
                <Form.Item
                    name="identifier"
                >
                    <Input></Input>
                </Form.Item>
                <Form.Item name="password">
                    <Password></Password>
                </Form.Item>
                <Button htmlType='submit'>Dang nhap</Button>
                <Link to="/signup">Ban chua co account ? Dang ky ngay</Link>
            </Form>
        </>
    )
}