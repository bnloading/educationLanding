import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react"; // Ensure lucide-react is installed
import search from "../../assets/MagnifyingGlass.svg";
import globe from "../../assets/GlobeHemisphereWest.svg";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleToggle = (e) => {
    e.stopPropagation(); // Prevent any parent elements from handling the event
    console.log("Hamburger menu clicked");
    setIsOpen((prev) => !prev); // Toggle menu state
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsSticky(scrollY > 100); // Set sticky state based on scroll position
      console.log("Scroll Y:", scrollY, "Is Sticky:", scrollY > 100); // Debug log
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isSticky ? "sticky" : ""}`}>
      {!isSticky && <div className="Logo">CySec Course</div>}
      <div className={`navbar-items ${isSticky ? "sticky" : ""}`}>
        <a className="items" href="#hero">
          Главная
        </a>
        <a className="items" href="#courses">
          Курсы
        </a>
        <a className="items" href="#pricing">
          Стоимость курсы
        </a>
        <a className="items" href="#calendar">
          Календарь курсов
        </a>
        <a className="items" href="#about">
          О нас
        </a>
        <a className="items" href="#contact">
          Контакт
        </a>
      </div>
      <div className="icon-container">
        {!isSticky && (
          <div className="iconsmenu" onClick={handleToggle}>
            <Menu size={24} color="#fff" />
          </div>
        )}
        {/* Remove global and search icons in sticky navbar */}
        {!isSticky && (
          <>
            <div className="icons">
              <img src={search} alt="Search" width={24} height={24} />
            </div>
            <div className="icons2">
              <img src={globe} alt="Global" width={24} height={24} />
            </div>
          </>
        )}
      </div>

      {isOpen && (
        <div className="modal" onClick={handleToggle}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={handleToggle}>
              &times;
            </span>
            <div className="modal-items">
              <a className="modal-item" href="#hero">
                Главная
              </a>
              <a className="modal-item" href="#courses">
                Курсы
              </a>
              <a className="modal-item" href="#pricing">
                Стоимость курсы
              </a>
              <a className="modal-item" href="#calendar">
                Календарь курсов
              </a>
              <a className="modal-item" href="#about">
                О нас
              </a>
              <a className="modal-item" href="#Form">
                Контакт
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
