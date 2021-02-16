import React from "react";
import Categories from "../components/Categories";
import "../style/produtos.css";
import { useSelector, useDispatch } from "react-redux";
import ModalImage from "react-modal-image";

const Produtos = () => {
  const products = useSelector((state) => state.productsReducer.filter(product => {
      return product.ativo === true;
  }))

  const dispatch = useDispatch();

  return (
    <div className="productContainer">
      <Categories />

      <section className="productSection">
        {products &&
          products.map(
            ({
              id_produto,
              imagem,
              alt_imagem,
              descricao,
              preco_antigo,
              preco_novo,
              qtt,
            }) => (
              <div key={id_produto} className="productCards">
                <ModalImage
                  className="image"
                  small={imagem}
                  large={imagem}
                  alt={alt_imagem}
                />
                <h3>{descricao}</h3>
                <p className="oldPrice">
                  {preco_antigo.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
                <p className="newPrice">
                  {preco_novo.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
                <button
                  onClick={() =>
                    dispatch({ type: "ADD_TO_CART", id: id_produto })
                  }
                >
                  <i className="fas fa-shopping-basket"></i>
                  Comprar
                </button>
              </div>
            )
          )}
      </section>
    </div>
  );
};

export default Produtos;
