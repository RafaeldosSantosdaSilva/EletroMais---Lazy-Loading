import React from "react";

const Form = () => {

  return (
    <form className="contactForm" onSubmit={() => alert('Mensagem enviada com sucesso!')}>
      <h3>Formulário para contato</h3>

      <label htmlFor="nome">
        Nome:
        <input
          type="text"
          id="nome"
          name="nome"
          placeholder="Digite seu nome"
          required
        />
      </label>

      <label htmlFor="email">
        Email:
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Digite seu Email"
          required
        />
      </label>

      <label htmlFor="msg">Mensagem:
      <textarea
        name="msg"
        id="msg"
        cols="50"
        rows="10"
        placeholder="Digite sua mensagem"
        required
      />
      </label>
      <button type="submit" className="buttonContact">
        Enviar
      </button>
    </form>
  );
};

export default Form;
