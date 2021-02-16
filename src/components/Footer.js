import React from "react";
import "../style/footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="payContainer">
        <h3>Formas de pagamento</h3>
        <img src="./imagem/pagamento.png" alt="formas de pagamento" />
      </div>
      
      <p className="footerAutor">Rafael Santos&reg; Recode Pro 2020</p>
    </footer>
  );
};

export default Footer;
