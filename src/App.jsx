import { createBrowserRouter, RouterProvider } from "react-router-dom";

//pages
import {
  Login,
  Register,
  SingleProduct,
  Order,
  HomeLayout,
  Cart,
  Chekout,
  Products,
  Error,
  About,
  Landing,
} from "./pages";
//Loader
import { loader as HomeLoader } from "./pages/Landing";
import { loader as SingleLoader } from "./pages/SingleProduct";
import { loader as ProductsLoader } from "./pages/Products";
function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Landing />,
          loader: HomeLoader,
        },
        {
          path: "/prodacts",
          element: <Products />,
          loader: ProductsLoader,
        },
        {
          path: "/prodact/:id",
          element: <SingleProduct />,
          loader: SingleLoader,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/chekout",
          element: <Chekout />,
        },
        {
          path: "/orders",
          element: <Order />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <Error />,
    },
    {
      path: "/register",
      element: <Register />,
      errorElement: <Error />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
