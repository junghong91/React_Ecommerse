import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };

  return (
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <button onClick={openMenu}>&#9776;</button>
          <a href="index.html">HONGSHOP</a>
        </div>
        <div className="header-links">
          <a href="cart.html">Cart</a>
          <a href="signin.html">Sign In</a>
        </div>
      </header>
      <aside className="sidebar">
        <h3>Shopping Categories</h3>
        <button className="sidebar-close-button" onClick={closeMenu}>
          x
        </button>
        <ul>
          <li>
            <a href="index.html">Pants</a>
          </li>
          <li>
            <a href="index.html">Shirts</a>
          </li>
          <li>
            <a href="index.html">Shoes</a>
          </li>
          <li>
            <a href="index.html">Accesories</a>
          </li>
        </ul>
      </aside>
      <main className="main">
        <div className="content">
          <ul className="products">
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="/images/nikeairforce.jpg"
                  alt="product"
                />
                <div className="product-name">
                  <a href="product.html">SB Dunk High</a>
                </div>
                <div className="product-brand">Nike</div>
                <div className="product-price">450,000</div>
                <div className="product-rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="/images/nikeairforce.jpg"
                  alt="product"
                />
                <div className="product-name">
                  <a href="product.html">SB Dunk High</a>
                </div>
                <div className="product-brand">Nike</div>
                <div className="product-price">450,000</div>
                <div className="product-rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="/images/nikeairforce.jpg"
                  alt="product"
                />
                <div className="product-name">
                  <a href="product.html">SB Dunk High</a>
                </div>
                <div className="product-brand">Nike</div>
                <div className="product-price">450,000</div>
                <div className="product-rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="/images/nikeairforce.jpg"
                  alt="product"
                />
                <div className="product-name">
                  <a href="product.html">SB Dunk High</a>
                </div>
                <div className="product-brand">Nike</div>
                <div className="product-price">450,000</div>
                <div className="product-rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="/images/nikeairforce.jpg"
                  alt="product"
                />
                <div className="product-name">
                  <a href="product.html">SB Dunk High</a>
                </div>
                <div className="product-brand">Nike</div>
                <div className="product-price">450,000</div>
                <div className="product-rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="/images/nikeairforce.jpg"
                  alt="product"
                />
                <div className="product-name">
                  <a href="product.html">SB Dunk High</a>
                </div>
                <div className="product-brand">Nike</div>
                <div className="product-price">450,000</div>
                <div className="product-rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="/images/nikeairforce.jpg"
                  alt="product"
                />
                <div className="product-name">
                  <a href="product.html">SB Dunk High</a>
                </div>
                <div className="product-brand">Nike</div>
                <div className="product-price">450,000</div>
                <div className="product-rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="/images/nikeairforce.jpg"
                  alt="product"
                />
                <div className="product-name">
                  <a href="product.html">SB Dunk High</a>
                </div>
                <div className="product-brand">Nike</div>
                <div className="product-price">450,000</div>
                <div className="product-rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="/images/nikeairforce.jpg"
                  alt="product"
                />
                <div className="product-name">
                  <a href="product.html">SB Dunk High</a>
                </div>
                <div className="product-brand">Nike</div>
                <div className="product-price">450,000</div>
                <div className="product-rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
          </ul>
        </div>
      </main>
      <footer className="footer">All right reserved</footer>
    </div>
  );
}

export default App;
