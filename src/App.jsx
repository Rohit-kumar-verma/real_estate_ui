
import HomePage from './routes/HomePage/HomePage'
import SinglePage from './routes/SinglePage/SinglePage'
import ListPage from './routes/ListPage/listPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './routes/layout/layout';

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
        {
          path:'/:id',
          element: <SinglePage/>,
        },
        {
          path:'/list-page',
          element:<ListPage/>
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={router}/>
  )
}

export default App
