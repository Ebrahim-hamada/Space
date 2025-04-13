import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/home/Home';
import Destination from './Components/Destination/Destination';

const App = () => {
  const router= createBrowserRouter([
    {
      path:"" , element: <Layout/>, children:[
        {index:true , element:<Home/>},
        {path:"/destination" , element:<Destination/>},
      ]

    }
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App