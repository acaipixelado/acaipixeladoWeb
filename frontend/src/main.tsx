// react
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// styles
import './output.css'
// pages
import VitePage from '@/pages/vite'
import HomePage from '@/pages/home'


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
  },
  {
    path: 'vite',
    element: <VitePage/>
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)