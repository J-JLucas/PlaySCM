/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";
import image from "../images/blankSky.png";

const imageAltText = "Starcraft Skybox";

const Home = () => {
  const isMobileDevice = window.innerWidth <= 480; // Adjust this value as needed

  return (
    <section id="home" className="min-height" style={{ backgroundColor: isMobileDevice ? 'black' : 'transparent' }}>
      {!isMobileDevice && <img className="background" src={image} alt="" />}
      {!isMobileDevice && (
        <div style={{ position: "absolute", bottom: "3rem", left: "50%" }}>
          <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} alt={imageAltText} />
        </div>
      )}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <iframe 
          title="YouTube video player"
          width={isMobileDevice ? "320" : "1280"} 
          height={isMobileDevice ? "180" : "720"} 
          src="https://www.youtube.com/embed/Dflu0cRGD5I?si=Wn1fJTyJm08dqbKN" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowFullScreen>
        </iframe>
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
