import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './routes/NotFound'
import Layout from './components/Layout'
import Products from './routes/Products'

function App () {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/*',
          element: <NotFound />
        },
        {
          path: '/',
          element: <Products />
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
