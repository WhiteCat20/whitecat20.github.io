import React from "react";
import fotoFaiz from "../img/faiz-ecs.png";

const Hero = () => {
  return (
    <header
      style={{
        margin: "auto",
        marginTop: "12rem",
        marginBottom: "15rem",
      }}
    >
      <div className="hero-wrapper" style={heroWrapper}>
        <img
          src={fotoFaiz}
          className="image-hero img-fluid"
          alt="Foto Faiz Lab ECS"
        />
        <section>
          <h1 className="hero-name">
            Hi!, I am <span style={{ color: "#A31ACB" }}>Faiz</span>
          </h1>
          <h3 className="hero-title">
            <span style={{ color: "#A31ACB" }}>Fullstack</span> Developer
          </h3>
        </section>
      </div>
    </header>
  );
};

export default Hero;

const heroWrapper = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
};
