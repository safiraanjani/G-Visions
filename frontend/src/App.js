import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Member from "./pages/Member";




import $ from 'jquery';

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

const Layout = () => {
  return(
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
  );
};

const router = createBrowserRouter ([
    {
      path: "/",
      element : <Layout />,
      children: [
        {
          path: "/",
          element : <Home />
        }
      ]
    },
    {
      path:"/contact",
      element: <Contact />
    },
    {
      path:"/member/:id",
      element: <Member />
    }
]);
function App() {
  return (
    <div>
      <RouterProvider router = {router}/>
    </div>
  );
}

export default App;