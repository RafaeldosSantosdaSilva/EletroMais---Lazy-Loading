import React from "react";

import { BrowserRouter } from "react-router-dom";

import store from "./redux/store";
import { Provider } from "react-redux";

import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Pages from "./pages/Pages";

import "./style/main.css";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Cart />

        <Pages />

        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
