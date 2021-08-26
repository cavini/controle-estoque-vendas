import React from "react";
import style from "./login.module.css";

export default function Login() {
  return (
    <div
      style={{
        display: "flex",
        height: "fit-content",
        justifyContent: "center",
        width: "100%",
        border: "2px solid violet",
        padding: "4% 0",
      }}
    >
      <div
        className={style.callToAction}
        style={{ border: "1px solid teal", minWidth: "30%", maxWidth: "40%" }}
      >
        <h1>mais praticidade para organizar o seu estoque!</h1>
      </div>
      <div className={style.loginWrapper}>
        <h3 className={`${style.header} primary`}>Seja bem vindo!</h3>
        <form action="submit" className={style.loginForm}>
          <input
            className={`${style.userName} ${style.loginInput}`}
            type="email"
            placeholder="Nome de Usuário"
          />
          <input
            className={`${style.userPassword} ${style.loginInput}`}
            type="password"
            placeholder="Senha"
          />
        </form>
      </div>
    </div>
  );
}
