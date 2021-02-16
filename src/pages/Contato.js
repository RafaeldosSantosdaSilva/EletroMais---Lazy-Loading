import React from "react";
import Form from "../components/Form";


const Contato = () => {
  return (
    <main>
      <h2>Contato</h2>
      <address>
        <div className="contact">
          <u className="fab fa-whatsapp"></u>
          <p>Tel: 21 2266-6621</p>
        </div>
        <div className="contact">
          <i className="fas fa-at"></i>
          <p>contato@elmais.com.br</p>
        </div>
      </address>
      <Form />
    </main>
  );
};

export default Contato;
