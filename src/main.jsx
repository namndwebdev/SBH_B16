import React from 'react'
import ReactDOM from 'react-dom/client'
import router from '@/router'
import './index.scss'
import '@/config/axios'
import { ConfigProvider } from 'antd'
import { RouterProvider } from 'react-router-dom'
import { store } from '@/redux/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
let persistor = persistStore(store);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
