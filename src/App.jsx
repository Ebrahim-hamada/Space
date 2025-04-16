import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion' // Import AnimatePresence
import Layout from './Components/Layout/Layout'
import Home from './Components/home/Home'
import Destination from './Components/destination/Destination'
import Crew from './Components/crew/Crew'
import Technology from './Components/technology/Technology'
import Error from './Components/Error/Error'

// إنشاء مكون MotionLayout للانتقالات
const MotionLayout = ({ children }) => {
  return (
    <AnimatePresence mode='wait'>
      <motion
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion>
    </AnimatePresence>
  )
}

const App = () => {
  const router = createBrowserRouter([
    {
      path: "",
      element: (
        <MotionLayout> 
          <Layout />
        </MotionLayout>
      ),
      children: [
        { index: true, element: <Home /> },
        { path: "/home", element: <Home /> },
        { path: "/destination", element: <Destination /> },
        { path: "/crew", element: <Crew /> },
        { path: "/technology", element: <Technology /> },
        { path: "*", element: <Error /> },
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App