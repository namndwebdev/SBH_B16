import { Layout, theme } from 'antd';
const { Footer } = Layout;
export default function FooterComponent(){
    return (
        <Footer
            style={{
            textAlign: 'center',
            }}
        >
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    )
}