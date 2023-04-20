import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const NavButton = ({ children, to }) => {
    return (
      <a href={to} style={{ textDecoration: "none", color: "inherit" }}>
        {children}
      </a>
    );
  };

  const ReachButton = ({ children }) => {
    return (
      <a href="#about" style={reachMeButton}>
        {children}
      </a>
    );
  };

  const OffCanvNav = ({ children, to }) => {
    const canvNavStyle = {
      display: "block",
      padding: "10px",
      backgroundColor: "#A31ACB",
      fontSize: "20px",
      fontWeight: "600",
      textAlign: "center",
      color: "white",
      borderRadius: "8px",
      textDecoration: "none",
      margin: "10px 0",
    };
    return (
      <a href={to} style={canvNavStyle} onClick={handleClose}>
        {children}
      </a>
    );
  };

  return (
    <nav style={navStyle}>
      <div style={navDivider}>
        <div className="brand-faiz">
          <span style={brandFaiz}>
            <i class="fa-solid fa-lemon"></i>
            <span>
              <NavButton to="#">
                Faiz<span className="rahmadani"> Rahmadani</span>
              </NavButton>
            </span>
          </span>
        </div>
        <div className="nav-items" style={navItems}>
          <NavButton to="#about">About</NavButton>
          <NavButton to="#projects">Projects</NavButton>
          <NavButton to="#blog">Blog</NavButton>
        </div>
        <div className="reach-me-btn">
          <ReachButton>Reach me!</ReachButton>
        </div>
        <div
          className="bars"
          onClick={handleShow}
          style={{ fontSize: "25px", cursor: "pointer" }}
        >
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
      {/* OffCanvas components */}
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header style={{ padding: "30px 30px" }} closeButton>
          <Offcanvas.Title>
            <span style={brandFaiz}>
              <i class="fa-solid fa-lemon"></i>
              <span>
                <NavButton to="#">Faiz Rahmadani</NavButton>
              </span>
            </span>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div style={{ margin: "auto" }}>
            <OffCanvNav to="#about">About</OffCanvNav>
            <OffCanvNav to="#projects">Latest Projects</OffCanvNav>
            <OffCanvNav to="#blog">Faiz's Blog</OffCanvNav>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </nav>
  );
};

export default Navbar;

const navStyle = {
  position: "fixed",
  top: 0,
  width: "100%",
  padding: "30px 30px",
  backgroundColor: "#000",
  zIndex: 1,
};

const navDivider = {
  width: "90%",
  margin: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

const brandFaiz = {
  fontWeight: "700",
  fontSize: "20px",
  display: "flex",
  gap: "14px",
  alignItems: "center",
};

const navItems = {
  display: "flex",
  justifyContent: "center",
  gap: "27px",
  fontSize: "18px",
  fontWeight: "700",
};

const reachMeButton = {
  display: "inline-block",
  textDecoration: "none",
  color: "inherit",
  backgroundColor: "#A31ACB",
  fontWeight: "600",
  fontSize: "18px",
  padding: "10px 30px",
  borderRadius: "64px",
};
