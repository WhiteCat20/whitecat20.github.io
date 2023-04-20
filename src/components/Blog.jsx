import React from "react";

const Blog = () => {
  return (
    <div
      style={{
        marginTop: "8.875rem",
        marginBottom: "26.875rem",
        position: "relative",
      }}
    >
      <div
        id="blog"
        style={{
          position: "absolute",
          width: "10px",
          height: "10px",
          top: "-200px",
        }}
      ></div>
      <h3
        className="blog-text"
        style={{ fontSize: "33px", textAlign: "center" }}
      >
        Checkout Faiz's Blog
      </h3>
      <h4 style={comingSoon}>Coming (really) soon..</h4>
    </div>
  );
};

export default Blog;

const comingSoon = {
  marginTop: "142px",
  fontStyle: "italic",
  fontWeight: "500",
  fontSize: "40px",
  textAlign: "center",
};
