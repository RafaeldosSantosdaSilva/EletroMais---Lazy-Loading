import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ModalImage from 'react-modal-image';

const Home = () => {
  const products = useSelector((state) => state.productsReducer);
  const dispatch = useDispatch();

  const offerProduct = products[0];

  return (
    <main>
      <h2 className="welcomeTitle">
        Bem vindo, a <span>EletroMais!</span>{" "}
      </h2>
           <p className="lead">
              Aqui em nossa loja, <em><strong>programadores tem desconto</strong></em> nos produtos para sua casa. Venha conferir!.
            </p>
     </main>
  );
};

export default Home;
