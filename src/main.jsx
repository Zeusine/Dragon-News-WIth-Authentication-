import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import routes from './routes/routes.jsx'
import AuthProvider from './Firebase/AuthProvider.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider><RouterProvider router = {routes}></RouterProvider></AuthProvider>
  </StrictMode>,
)
