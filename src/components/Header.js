import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';

import "../style/header.css";
import "../style/cart.css";


const Header = () => {
  const activatingCart = () => {
    const cartContainer = document.querySelector('.cartContainer').className
    const addClass = cartContainer === 'cartContainer' ? 'cartContainer showing' : 'cartContainer'
    document.querySelector('.cartContainer').className = addClass;
  }

  const totalQtt = useSelector((state) => 
    state.cartReducer.reduce((add, current) => {
      return add + current.qtt
    }, 0)
  )

  return (
      <header>
        <div className="topBar">
          <NavLink to="/" end>
            <img src="../imagem/logo.jpg" alt="logotipo da loja" />
          </NavLink>

          <div className="searchDiv">
            <input type="text" id="searchBar" placeholder="Pesquisar" readOnly />
            <button id="searchButton" type="submit">
              <i className="fa fa-search"></i>
            </button>
          </div>

          <div className="cartIconContainer">
            <button className="cartIcon"
            onClick={activatingCart}
            >
              <i className="fas fa-shopping-basket"></i>
              <span className="cartCount">{totalQtt}</span>
            </button>
          </div>
        </div>

        <nav className="navMenu">
          <NavLink to="produtos">Produtos</NavLink>
          <NavLink to="lojas">Lojas</NavLink>
          <NavLink to="contato">Contato</NavLink>
        </nav>
      </header>
  );
};

export default Header;
