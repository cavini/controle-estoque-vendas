import React from "react";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

export default function Layout({ children }: any) {
  return (
    <div
      style={{
        height: "100%",
        border: "10px solid black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Navbar />
      <main
        style={{
          border: "2px solid red",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "0 10%",
        }}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
