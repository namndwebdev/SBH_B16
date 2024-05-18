import React from 'react';
import { Layout, theme } from 'antd';
import { Outlet } from 'react-router-dom';
import HeaderComponent from './Header'
import FooterComponent from './Footer'
const { Content } = Layout;

const BaseLayout = () => {
  
  return (
    <Layout>
      <HeaderComponent></HeaderComponent>
      <Content
        style={{
          padding: '0 48px',
          minHeight: 'calc(100vh - 129px)'
        }}
      >
       <Outlet/>
      </Content>
      <FooterComponent></FooterComponent>
    </Layout>
  );
};
export default BaseLayout;