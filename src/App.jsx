import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/home/Home';
import Destination from './Components/destination/Destination';
import Crew from './Components/crew/Crew';
import Technology from './Components/technology/Technology';

const App = () => {
  const router= createBrowserRouter([
    {
      path:"" , element: <Layout/>, children:[
        {index:true , element:<Home/>},
        {path:"/destination" , element:<Destination/>},
        {path:"/crew" , element:<Crew/>},
        {path:"/technology" , element:<Technology/>},
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