//import React from "react";
import React, { useState } from "react";

import image1 from "../images/SCMTitle.jpg";
import image2 from "../images/FirstShot.jpg";
import image3 from "../images/Installation2.jpg";
import image4 from "../images/Lab.jpg";
import image5 from "../images/Nightvision.jpg";

const images = [image1, image2, image3, image4, image5];

const imageAltText = "SCM Titlescreen";

const project = {
  title: "CLICK TO DOWNLOAD STARCRAFT MARINE",
  description: "Navigate to releases on the righthand side",
  url: "https://github.com/J-JLucas/SCM/releases/tag/FirstRelease",
};

const Download = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="padding" id="portfolio" style={{ backgroundColor: "black", color: "rgb(197, 217, 255)" }}>
      <h2 style={{ textAlign: "center" }}>Download</h2>
      
      <div style={{ display: "flex", justifyContent: "center", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center", margin: "auto" }}>
          <button onClick={prevImage}>Previous</button>
          <img
            src={images[currentImageIndex]}
            style={{ height: "90%", width: "100%", objectFit: "cover", cursor: 'pointer' }}
            alt={imageAltText}
            onClick={openModal}
          />
          <button onClick={nextImage}>Next</button>

          {isModalOpen && (
            <div onClick={closeModal} style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src={images[currentImageIndex]} alt="" onClick={closeModal} />
            </div>
          )}
        </div>


        <div className="container" style={{ display: 'inline-block' }}>
          <div className="box">
            <a href={project.url} target="_blank" rel="noopener noreferrer" style={{ color: "rgb(197, 217, 255)" }}>
              <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
            </a>
            <p className="small">{project.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;