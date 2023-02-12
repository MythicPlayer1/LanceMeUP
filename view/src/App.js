
import { Routes, Route, Router } from "react-router-dom";
import './App.css';
import LoginPage from './page/LoginPage';
import { AddProductContext, ProductContext, UserContext } from "./components/UserContext";
import { useState } from "react";
import { RegistrationPage } from "./page/RegistrationPage";
import DashBoard from "./page/DashBoard";
import Cart from "./page/Cart";
import Example from "./page/Example";
import Adminpage from "./page/Adminpage";
import Addproduct from "./page/Addproduct";
import Productlistpage from "./page/Productlistpage";

function App(props) {

  const [User, setUser] = useState();
  const [cartItem, setcartItem] = useState()
  const [addproduct, setaddproduct] = useState()
  console.log(cartItem)
  console.log(addproduct)


  return (
    <div className="App">
      <UserContext.Provider value={{ User, setUser }} >
        <ProductContext.Provider value={{ cartItem, setcartItem }}>
          <AddProductContext.Provider value={{ addproduct, setaddproduct }}>
            <Routes>
              <Route path="/cart" element={<Cart cartProduct={cartItem} />}></Route>
              <Route path="/admin" element={<Adminpage />}></Route>
              <Route path='/dashboard' element={<DashBoard />}></Route>
              <Route path='/example' element={<Example />}></Route>
              <Route path="/login" element={<LoginPage />}></Route>
              <Route path="/registration" element={<RegistrationPage />}></Route>
              <Route path="/addproduct" element={<Addproduct />}></Route>
              <Route path="/productlist" element={<Productlistpage />}></Route>

              {/* <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/registration" element={<RegistrationPage/>}></Route> */}
            </Routes>
          </AddProductContext.Provider>
        </ProductContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
