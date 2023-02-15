
import { Routes, Route, Router } from "react-router-dom";
import './App.css';
import LoginPage from './page/LoginPage';
import { AddProductContext, OrderItemContext, ProductContext, UserContext } from "./components/UserContext";
import { useState } from "react";
import { RegistrationPage } from "./page/RegistrationPage";
import DashBoard from "./page/DashBoard";
import Cart from "./page/Cart";

import Adminpage from "./page/Adminpage";
import Addproduct from "./page/Addproduct";
import Productlistpage from "./page/Productlistpage";
import { Orderpage } from "./page/Orderpage";
import PrivateRoutes from "./utils/PrivateRoutes";


function App(props) {

  const [User, setUser,token] = useState();
  const [cartItem, setcartItem] = useState([])
  const [addproduct, setaddproduct] = useState([])
  const [orderItem, setorderItem] = useState([])

  return (
    <div className="App">

      <UserContext.Provider value={{ User, setUser ,token}} >
        <ProductContext.Provider value={{ cartItem, setcartItem }}>
          <AddProductContext.Provider value={{ addproduct, setaddproduct }}>
            <OrderItemContext.Provider value={{ orderItem, setorderItem }}>
              <Routes>
                <Route element={<PrivateRoutes />}>
                  <Route path="/cart" element={<Cart />} ></Route>
                  <Route path="/addproduct" element={<Addproduct />}></Route>
                  <Route path="/productlist" element={<Productlistpage />}></Route>
                  <Route path="/orderpage" element={<Orderpage />}></Route>
                  <Route path="/dashboard" element={<DashBoard />}></Route>
                  <Route path="/admin" element={<Adminpage />}></Route>
                </Route>
                <Route path="/" element={<LoginPage />}></Route>
                <Route path="/login" element={<LoginPage />}></Route>
                <Route path="/registration" element={<RegistrationPage />}></Route>

                {/* <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/registration" element={<RegistrationPage/>}></Route> */}
              </Routes>
            </OrderItemContext.Provider>
          </AddProductContext.Provider>
        </ProductContext.Provider>
      </UserContext.Provider>

    </div>
  );
}

export default App;
