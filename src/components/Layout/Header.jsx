import { Link } from 'react-router-dom'
import logo from '@/assets/react.svg'
import { Layout, Menu, Row, Col } from 'antd';
const { Header } = Layout;
export default function HeaderComponent() {
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
        </Header>
    )
}