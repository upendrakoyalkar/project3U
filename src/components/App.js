import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client"
import Body from "./Body";
import Header from "./Header";
import { createBrowserRouter , RouterProvider,Outlet} from "react-router-dom";
import Error from "./Error";
import ContactUs from "./ContactUs";
import About from "./About";
import RestaurentMenu from "./RestaurentMenu";
import Grocery from "./Grocery";

const Grocery = lazy(() => import("./Grocery"));

const App = () => {
    return(
    <div>
      <Header />
      <Outlet />

</div>)  
}

const approuter = createBrowserRouter([
     {
     path : "/",
     element : <App />,
     children: [
     {
          path : "/",
          element : <Body />,
          },
     {
     path : "/about",
     element : <About />,
     },
     {
     path : "/contact",
     element : <ContactUs />,
     },
     {
          path : "/gocery",
          element : <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>,
          },{
               path : "/RestaurentMenu/:id",
               element : <RestaurentMenu />
               ,
          }
    ],
      errorElement : <Error/>,
     },
]);




const rootEl = ReactDOM.createRoot(document.getElementById("root"))
rootEl.render(< RouterProvider router = {approuter}/>)