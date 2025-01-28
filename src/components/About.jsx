import React from "react";
import fotoFaiz2 from "../img/faiz-tunjungan-2.JPG";
// import fotoFaiz2 from "../img/faiz-jahim.png";
import indoFlag from "../img/indonesia-flag-icon.svg";

const About = () => {
  const ContactBadge = ({ to, icon }) => {
    return (
      <a
        href={to}
        target="_blank"
        className="contact-badge"
        style={contactBadge}
        rel="noreferrer"
      >
        <i class={icon}></i>
      </a>
    );
  };
  const DownloadCv = ({ children }) => {
    return (
      <a
        href="https://docs.google.com/document/d/1YhV31VOJA2gVrpFs9YfgVGMeQerLJfe9G3KosLwGsAM/edit?usp=sharing"
        target="_blank"
        style={cvButton}
        rel="noreferrer"
      >
        {children}
      </a>
    );
  };

  return (
    <div style={aboutRoot}>
      <div
        id="about"
        style={{
          position: "absolute",
          width: "10px",
          height: "10px",
          top: "630px",
        }}
      ></div>
      <div
        style={{
          margin: "auto",
        }}
      >
        <h3 className="about-text" style={{ fontSize: "43px" }}>
          About
        </h3>
        <div className="about-content" style={aboutContent}>
          <div className="image-about-wrapper">
            <img
              className="image-about img-fluid"
              src={fotoFaiz2}
              width="450px"
              height="150px"
              alt="faiz about"
              style={{
                borderRadius: "16px",
              }}
            />
          </div>
          <div className="content-bio">
            <h5 style={{ fontWeight: "500" }}>
              Surabaya, Indonesia{" "}
              <span>
                <img src={indoFlag} width="20px" alt="indo flag" />
              </span>
            </h5>
            <h1>M. Faiz Rahmadani</h1>
            <h4 style={{ color: "#D9D9D9" }}>Software Engineer</h4>
            <section className="contact-me" style={{ marginTop: "1rem" }}>
              <h3 style={{ fontWeight: "700" }}>Contact me!</h3>
              <div
                className="contacts-wrapper"
                style={{ display: "flex", gap: "14px" }}
              >
                <ContactBadge
                  to="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=fzrahmadan@gmail.com"
                  icon="fa-solid fa-envelope"
                />
                <ContactBadge
                  to="https://github.com/WhiteCat20"
                  icon="fa-brands fa-github"
                />
                <ContactBadge
                  to="https://api.whatsapp.com/send/?phone=6282213574819&text&type=phone_number&app_absent=0"
                  icon="fa-brands fa-whatsapp"
                />
              </div>
              <div className="download-cv" style={{ marginTop: "2rem" }}>
                <DownloadCv>Check out my CV</DownloadCv>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

const aboutRoot = {
  display: "flex",
  justifyContent: "center",
  marginBottom: "15rem",
};

const aboutContent = {
  display: "flex",
  flexWrap: "wrap",
  gap: "53px",
  marginTop: "22px",
};

const contactBadge = {
  textDecoration: "none",
  color: "inherit",
  marginTop: "23px",
  backgroundColor: "#A31ACB",
  width: "54px",
  height: "54px",
  borderRadius: "64px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "30px",
};

const cvButton = {
  backgroundColor: "#A31ACB",
  color: "#fff",
  textDecoration: "none",
  fontWeight: "600",
  fontSize: "21px",
  padding: "10px 15px",
  borderRadius: "8px",
};
