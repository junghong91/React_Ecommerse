import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import SigninScreen from "./screens/SigninScreen";
import { useSelector } from "react-redux";
import RegisterScreen from "./screens/RegisterScreen";
import ProductsScreen from "./screens/ProductsScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import ProfileScreen from "./screens/ProfileScreen";
import OrdersScreen from "./screens/OrdersScreen";

function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo } = userSignin;
  const { userInfo: userInfoRegister } = userRegister;

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <Link to="/">HONGSHOP</Link>
          </div>
          <div className="header-links">
            <Link to="/cart">
              Cart <i className="fas fa-shopping-cart"></i>
            </Link>
            {userInfo ? (
              <Link to="/profile">{userInfo.name}</Link>
            ) : userInfoRegister ? (
              <Link to="/profile">{userInfoRegister.name}</Link>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <a href="#">Admin</a>
                <ul className="dropdown-content">
                  <Link to="/orders">Orders</Link>
                  <Link to="/products">Products</Link>
                </ul>
              </div>
            )}
          </div>
        </header>
        <aside className="sidebar">
          <div className="sidebar-header">
            <i className="fas fa-list-ul"></i>
            <span> Categories</span>
          </div>
          <button className="sidebar-close-button" onClick={closeMenu}>
            <i className="fas fa-times"></i>
          </button>
          <ul className="categories">
            <li>
              <Link to="/">All</Link>
            </li>
            <li>
              <Link to="/category/Outfits">Outfits</Link>
            </li>
            <li>
              <Link to="/category/Shoes">Shoes</Link>
            </li>
            <li>
              <Link to="/category/Accessories">Accessories</Link>
            </li>
          </ul>
        </aside>
        <main className="main">
          <div className="content">
            <Route path="/orders" component={OrdersScreen} />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/order/:id" component={OrderScreen} />
            <Route path="/products" component={ProductsScreen} />
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/payment" component={PaymentScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/signin" component={SigninScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/category/:id" component={HomeScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
          </div>
        </main>
        <footer className="footer">
          All Rights Reserved.
          <a
            className="footer-link"
            href="https://github.com/junghong91/React_Ecommerse"
            target="_blank"
          >
            <i className="fab fa-github"></i>
            Github of this page
          </a>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
