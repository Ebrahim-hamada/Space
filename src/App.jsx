import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/home/Home';
import Destination from './Components/Destination/Destination';
import Crew from './Components/crew/Crew';

const App = () => {
  const router= createBrowserRouter([
    {
      path:"" , element: <Layout/>, children:[
        {index:true , element:<Home/>},
        {path:"/destination" , element:<Destination/>},
        {path:"/crew" , element:<Crew/>},
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