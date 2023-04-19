import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage"
import MenuPage from "./components/MenuPage"
import BookATable from "./components/BookATable"
import Restaurant from "./components/Restaurant"
import OrderOnline from "./components/OrderOnline";
import CartPage from "./components/CartPage";
import './App.css';
import { auth } from "./Firebase"
import LoginPage from "./components/LoginPage";


function App() {
  const [presentUser, setPresentUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setPresentUser({
          uid: user.id,
          email: user.email
        })
      } else {
        setPresentUser(null);
      }
    })
  }, [])
  return (
    <div className="App">
       
      {presentUser ? <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route exact path="/menu" element={<MenuPage />}></Route>
          <Route exact path="/table" element={<BookATable />}></Route>
          <Route exact path="/restaurant" element={<Restaurant />}></Route>
          <Route exact path="/order" element={<OrderOnline />}></Route>
          <Route exact path="/cart" element={<CartPage />}></Route>
        </Routes>
      </BrowserRouter> : <LoginPage />}
    </div>
  );
}

export default App;
