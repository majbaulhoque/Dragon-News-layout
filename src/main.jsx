import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import route from './Route/Route'
import ContextAuthProvider from './Component/Provider/ContextAuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextAuthProvider>
      <RouterProvider router={route}></RouterProvider>
    </ContextAuthProvider>
  </React.StrictMode>,
)
