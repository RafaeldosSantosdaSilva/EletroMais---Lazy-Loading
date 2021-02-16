import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "../style/cart.css";

const Cart = () => {
  const deactivatingCart = (e) => {
    const cartContainer = document.querySelector(".cartContainer").className;
    const removeClass =
      cartContainer === "cartContainer showing"
        ? "cartContainer"
        : "cartContainer showing";
    if (e.target.classList.value === "cartContainer showing") {
      document.querySelector(".cartContainer").className = removeClass;
    }
  };

  const cart = useSelector((state) => state.cartReducer.filter(product => {
    return product.qtt > 0
  }));
  const dispatch = useDispatch();

  const totalPrice = useSelector(state => state.cartReducer.reduce((add, current) => {
    return add + current.preco_novo * current.qtt;
  }, 0))

  return (
    <aside
      className="cartContainer"
      id="cartContainer"
      onClick={deactivatingCart}
    >
      <div className="cart">
        <h3>Seu carrinho de compras</h3>
        <div className="items">
          {cart &&
            cart.map(({ id_produto, descricao, preco_novo, qtt }) => (
              <div key={id_produto} className="item">
                <p>
                  <span>{descricao}</span>
                </p>
                <p>
                  Valor:{" "}
                  <span>
                    {(preco_novo * qtt).toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </span>
                </p>
                <p className="qtt">
                  Quantidade: {qtt}{" "}
                  <button className="btMinus"
                    onClick={() =>
                      dispatch({ type: "REMOVE_FROM_CART", id: id_produto })
                    }
                  >
                    -
                  </button>
                  <button className="btMore"
                    onClick={() =>
                      dispatch({ type: "ADD_TO_CART", id: id_produto })
                    }
                  >
                    +
                  </button>
                </p>
              </div>
            ))}

          <h3 className="totalPrice">Total: {totalPrice.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}</h3>

          <div className="buttons">
            <button className="cartButton clean"
            onClick={() => dispatch({type: "CLEAR_CART"})}
            >Limpar</button>
            <button
              className="cartButton  checkout"
              onClick={() => alert("Em breve")}
            >
              Comprar
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Cart;
