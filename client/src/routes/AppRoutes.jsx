// src/AppRouters.jsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import PackageDetails from '../pages/PackageDetails'
import App from '../App'
import Packages from '../pages/Packages'


const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
    children: [
      {
        path: 'packages',
        element: <Packages />,
      },

    ],
  
  },
  {
    path: '/packages',
    element: <Packages />,
  },
  {
    path: '/packages/package/:id',
    element: <PackageDetails/>,
  }
])

const AppRouters = () => {
  return <RouterProvider router={Router} />
}

export default AppRouters
