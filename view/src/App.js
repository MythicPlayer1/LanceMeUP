
import { Routes, Route, Router } from "react-router-dom";
import './App.css';
import LoginPage from './page/LoginPage';
import { ProductContext, UserContext } from "./components/UserContext";
import { useState } from "react";
import { RegistrationPage } from "./page/RegistrationPage";
import DashBoard from "./page/DashBoard";
import Cart from "./page/Cart";

function App(props) {

  const [User, setUser] = useState();
  const [cartItem, setcartItem] = useState()
 
  const data=[cartItem]
  console.log(data)


  console.log(cartItem)
 

  return (
    <div className="App">
      <UserContext.Provider value={{ User, setUser }} >
        <ProductContext.Provider value={{ cartItem, setcartItem }}>
          <Routes>
            <Route path="/cart" element={<Cart cartProduct={cartItem}  />}></Route>
            <Route path='/dashboard' element={<DashBoard />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/registration" element={<RegistrationPage />}></Route>
            {/* <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/registration" element={<RegistrationPage/>}></Route> */}
          </Routes>
        </ProductContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
