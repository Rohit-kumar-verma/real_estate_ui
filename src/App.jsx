
import HomePage from './routes/HomePage/HomePage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout/layout';

function App() {

  const router=createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path:"/",
          element:<HomePage/>,
        },
        // {
        //   path:"/About",
        //   element:<About/>,
        // }
      ]
    }
  ]);

  return (
    <RouterProvider router={router}/>
  )
}

export default App
