import React from "react";
import { Routes, Route } from "react-router-dom";
import Contato from "../pages/Contato";

import {lazy, Suspense} from 'react';

import '../style/load.css';

const Home = lazy(() => import("../pages/Home"));
const Produtos = lazy(() => import("../pages/Produtos"));
const Lojas = lazy(() => import("../pages/Lojas"));

function loading() {
  return (
    <>
      <h3 style={{marginBottom: '-1rem'}}>Carregando</h3>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

const Pages = () => {
  return (
    <Routes>
      <Suspense fallback={loading()}>
        <Route path="/" element={<Home />} />
      </Suspense>
      <Suspense fallback={loading()}>
        <Route path="produtos" element={<Produtos />} />
      </Suspense>
      <Suspense fallback={loading()}>
        <Route path="lojas" element={<Lojas />} />
      </Suspense>
      <Route path="contato" element={<Contato />} />
    </Routes>
  );
};
export default Pages
