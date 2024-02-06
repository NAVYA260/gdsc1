import React from "react";
import First from './Pages/First'
import Register from './Pages/Register'
import Login from './Pages/Login'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WhatToDonate from "./Pages/WhatToDonate";
import OrgNames1 from "./Pages/OrgNames1";
import OrgNames2 from "./Pages/OrgNames2";
import OrgNames3 from "./Pages/OrgNames3";
import Org1food from "./Pages/Org1food";
import Org2food from "./Pages/Org2food";
import Org3food from "./Pages/Org3food";
import ThankyouFood from "./Pages/ThankyouFood";
import Org1amount from "./Pages/Org1amount";
import Org2amount from "./Pages/Org2amount";
import Org3amount from "./Pages/Org3amount";
import AmountTransfer from "./Pages/AmountTransfer";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import OrgLogin from "./Pages/OrgLogin";
const router = createBrowserRouter([
    {path:'/',element:<First/>},
    {path:'/register',element:<Register/>},
    {path:'/login',element:<Login/>},
    {path:'/whattodonate',element:<WhatToDonate/>},
    {path:'/orgnames1',element:<OrgNames1/>},
    {path:'/orgnames2',element:<OrgNames2/>},
    {path:'/orgnames3',element:<OrgNames3/>},
    {path:'/org1food',element:<Org1food/>},
    {path:'/org2food',element:<Org2food/>},
    {path:'/org3food',element:<Org3food/>},
    {path:'/thankyoufood',element:<ThankyouFood/>},
    {path:'/org1amount',element:<Org1amount/>},
    {path:'/org2amount',element:<Org2amount/>},
    {path:'/org3amount',element:<Org3amount/>},
    {path:'/amounttransfer',element:<AmountTransfer/>},
    {path:'/aboutus',element:<AboutUs/>},
    {path:'/contactus',element:<ContactUs/>},
    {path:'/orglogin',element:<OrgLogin/>},
])
function App() {
     return <RouterProvider router={router} />
}
export default App;