import React from "react";
import dashboardEcs from "../img/Screenshot 2023-04-19 053712.png";
import dashboardEl from "../img/Screenshot 2023-04-05 041802.png";

const Projects = () => {
  const ProjectDisplay = ({ name, image }) => {
    return (
      <div className="project-display" style={projectDisplay}>
        <div className="image-project-wrapper">
          <img
            className="img-fluid image-project"
            src={image}
            width="400"
            alt={name}
            style={{ borderRadius: "8px" }}
          />
        </div>
        <div className="project-detail">
          <h3 style={{ fontWeight: "500", marginBottom: "20px" }}>{name}</h3>
          <div className="demo-button-wrapper">
            <a
              onClick={() => alert("Coming soon!")}
              className="demo-button"
              style={demoButton}
            >
              Demo
            </a>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div style={projectRoot}>
      <div
        id="projects"
        style={{
          position: "absolute",
          width: "10px",
          height: "10px",
          top: "-150px",
        }}
      ></div>
      <div style={{ margin: "auto" }}>
        <h3
          className="project-text"
          style={{ fontSize: "33px", textAlign: "center" }}
        >
          Latest Projects
        </h3>
        <div className="projects">
          <ProjectDisplay image={dashboardEcs} name="Admin Dashboard ECS" />
          <ProjectDisplay image={dashboardEl} name="Dashboard Sepeda Listrik" />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "5rem",
          }}
        >
          <a style={seeMoreButton} onClick={() => alert("Coming soon")}>
            See more..
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;

const projectRoot = {
  display: "flex",
  justifyContent: "center",
  position: "relative",
};

const projectDisplay = {
  display: "flex",
  alignItems: "center",
  marginTop: "53px",
};

const demoButton = {
  cursor: "pointer",
  color: "white",
  textDecoration: "none",
  backgroundColor: "#A31ACB",
  fontSize: "28px",
  padding: "14px 54px",
  borderRadius: "10px",
};

const seeMoreButton = {
  cursor: "pointer",
  color: "white",
  textDecoration: "none",
  backgroundColor: "#A31ACB",
  fontSize: "20px",
  padding: "11px 38px",
  borderRadius: "64px",
};
