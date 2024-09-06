import React from 'react'
import { RouterProvider } from 'react-router'
import router from '../src/Routes/Routes'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
      <ToastContainer/>
    </div>
  )
}

export default App


