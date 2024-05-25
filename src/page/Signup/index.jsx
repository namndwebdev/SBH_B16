import { Form, Button, Input, notification } from "antd"
import { Link, useNavigate } from 'react-router-dom'
import {signup} from '@/services/auth'
const { Password } = Input

export default function Signup(){
    const nav = useNavigate()
    const [api, contextHolder] = notification.useNotification();
    const errorNotify = (title, description) => {
        api['error']({
          message: title,
          description: description
        });
    };
    async function onSubmit(values){
        try {
            await signup(values)
            nav('/login')
        } catch (error) {
            console.log(error.message);
            errorNotify('Dang ky khong thanh cong', error.message)
        }
    }
    return (
        <>  
            {contextHolder}
            <h1>Dang ky tai khoan</h1>
            <Form onFinish={onSubmit}>
                <Form.Item
                    label="Ten"
                    name="username"
                    rules={[
                        {max: 30},
                        {min: 6}
                    ]}
                >
                    <Input></Input>
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {type: 'email'}
                    ]}
                >
                    <Input></Input>
                </Form.Item>
                <Form.Item 
                    name="password" 
                    label="Mat khau"
                    rules={[
                        {max: 30},
                        {min: 6}
                    ]}
                >
                    <Password></Password>
                </Form.Item>
                <Button htmlType='submit'>Dang ky</Button>
                <Link to="/login">Ve trang Login</Link>
            </Form>
        </>
    )
}