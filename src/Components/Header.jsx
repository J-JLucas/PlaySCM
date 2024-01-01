/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";

const Header = () => {
  const isMobile = window.innerWidth <= 600;

  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        gap: isMobile ? "1rem" : "2rem",
        background: "rgba(0,0,0,0.75)",
        padding: isMobile ? "0.5rem" : "1rem",
        top: 0,
        width: "100%",
        zIndex: 10,
      }}
    >
      <a href="#home" style={{ color: "rgb(197, 217, 255)", fontSize: isMobile ? "0.8rem" : "1rem" }}>Home</a>
      <a href="#about" style={{ color: "rgb(197, 217, 255)", fontSize: isMobile ? "0.8rem" : "1rem" }}>About</a>
      <a href="#portfolio" style={{ color: "rgb(197, 217, 255)", fontSize: isMobile ? "0.8rem" : "1rem" }}>Download</a>
      <a href="#footer" style={{ color: "rgb(197, 217, 255)", fontSize: isMobile ? "0.8rem" : "1rem" }}>Contact</a>
    </div>
  );
};

export default Header;
