import { Link, useNavigate } from 'react-router-dom'
import logo from '@/assets/react.svg'
import { Layout, Menu, Row, Col, Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAuth } from '@/redux/auth'
const { Header } = Layout;
const {Search} = Input
export default function HeaderComponent() {
    const nav = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(stateTong => { return stateTong.auth.user })
    const token = useSelector(stateTong => { return stateTong.auth.token })
    const items = [{
        key: 'home',
        label: <Link to="/"><h1>Trang chu</h1></Link>
    }, {
        key: 'contact',
        label: <h1>Contact</h1>
    }]
    return (
        <Header
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}
        >
            <Link to="/"><img src={logo} alt="" /></Link>
            <Search
                placeholder="input search text"
                onSearch={(value)=>{
                    nav(`/timkiem?ten=${value}`)
                }}
                style={{
                    width: 200,
                }}
            />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2', '10']}
                items={items}
                style={{
                    flex: 1,
                    minWidth: '500px',
                    justifyContent: 'center'
                }}
            />
            {
                token ? <>
                    <Link to={"/thong-tin"}><h1>{user?.email}</h1> </Link>
                    <Button onClick={()=>{
                        dispatch(logoutAuth())
                    }}>Logout</Button>
                </> : <Button onClick={()=>{
                    nav('/login')
                }}>Login</Button>
            }
        </Header>
    )
}