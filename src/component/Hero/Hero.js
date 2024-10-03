import React from "react";
import "./Hero.css";
import thunder from "../../assets/hero_icon.svg";
import image1 from "../../assets/1.png"; // First 3D image
import image2 from "../../assets/2.png"; // Second 3D image
import image3 from "../../assets/3.png"; // Third 3D image
import image4 from "../../assets/4.png"; // Fourth 3D image
import image5 from "../../assets/7.png"; // Fifth 3D image
import image6 from "../../assets/6.png"; // Sixth 3D image
import image7 from "../../assets/7.png";
import image8 from "../../assets/8.png";
import background from "../../assets/Encryption.png";
const Hero = () => {
  return (
    <div>
      <div className="main">
        <div className="gradiant"></div>
        <div className="Herocontainer">
          <div
            className="text1Container"
            style={{ display: window.innerWidth <= 768 ? "none" : "flex" }}
          >
            <img src={thunder} alt="thunder" className="thunder" />
            <span className="text1">
              Большой шаг в области сетевой и кибербезопасности.
            </span>
          </div>
          <div className="herotextcontainer">
            <h1 className="herotext">
              С вами в вашей новой карьере в сфере кибербезопасности
            </h1>
          </div>
        </div>
        <img
          src={background}
          alt="back"
          width={1440}
          height={473}
          style={{ position: "absolute", zIndex: -3, top: 40 }}
        />
        {/* Add all six 3D images */}
        {/* <img
          src={image1}
          alt="3D Representation 1"
          className="threeDImage"
          style={{ top: "90%", right: "23%" }}
        />
        <img
          src={image2}
          alt="3D Representation 2"
          className="threeDImage"
          style={{ top: "50%", right: "20%" }}
        />
        <img
          src={image3}
          alt="3D Representation 3"
          className="threeDImage"
          style={{ top: "85%", right: "5%" }}
        />
        <img
          src={image4}
          alt="3D Representation 4"
          className="threeDImage"
          style={{ top: "15%", left: "5%" }}
        />
        <img
          src={image5}
          alt="3D Representation 5"
          className="threeDImage"
          style={{ top: "5%", right: "20%" }}
        />
        <img
          src={image6}
          alt="3D Representation 6"
          className="threeDImage"
          style={{ top: "45%", left: "15%" }}
        />
        <img
          src={image7}
          alt="3D Representation 6"
          className="threeDImage"
          style={{ top: "85%", left: "17%" }}
        />
        <img
          src={image8}
          alt="3D Representation 6"
          className="threeDImage"
          style={{ top: "95%", left: "1%" }}
        /> */}
      </div>
    </div>
  );
};

export default Hero;
