import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/home/Home';

const App = () => {
  const router= createBrowserRouter([
    {
      path:"" , element: <Layout/>, children:[
        {index:true , element:<Home/>}]

    }
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App