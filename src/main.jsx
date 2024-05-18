import React from 'react'
import ReactDOM from 'react-dom/client'
import router from '@/router'
import './index.scss'
import '@/config/axios'
import { ConfigProvider } from 'antd'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            headerBg: 'white'
          },
          Menu: {
            darkItemBg: 'white',
            darkItemColor: 'black',
            darkItemHoverBg: 'black',
            darkItemHoverColor: 'white',
            horizontalItemHoverBg: 'black',
            horizontalItemHoverColor: 'white',
            darkPopupBg: '#dadada'
          }
        },
      }}
    >
      <RouterProvider router={router}/>
    </ConfigProvider>
  </React.StrictMode>,
)
