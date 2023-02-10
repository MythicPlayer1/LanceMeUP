
import { Routes, Route, Router } from "react-router-dom";
import './App.css';
import LoginPage from './page/LoginPage';
import { UserContext } from "./components/UserContext";
import { useState } from "react";
import { RegistrationPage } from "./page/RegistrationPage";

function App() {
  const [User, setUser] = useState();
  return (
    <div className="App">
       <UserContext.Provider value={{ User, setUser }} >
          <Routes>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/registration" element={<RegistrationPage/>}></Route>
          </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
