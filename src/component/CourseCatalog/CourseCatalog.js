import React, { useState, useEffect } from "react";
import coursesData from "../../courses.json";
import "./CoursesCatalog.css";

import folder from "../../assets/folders__82.svg";
import usti from "../../assets/usti.svg";
import monitor from "../../assets/Monitor.svg";
import calendar from "../../assets/CalendarBlank.svg";
import arrow from "../../assets/arrow-down-right.svg";
import price from "../../assets/CurrencyDollar.svg";
import {
  ArrowDownRight,
  X,
  Dot,
  ArrowRight,
  ShareNetwork,
} from "@phosphor-icons/react";

// Import all course images
import course1 from "../../assets/course1.png";
import course2 from "../../assets/course2.png";
import course3 from "../../assets/course3.png";
import course4 from "../../assets/course5.png";
import course6 from "../../assets/course6.png";
import GlobeHemisphereWest from "../../assets/GlobeHemisphereWest.svg";

// Create an object to map image names to their imports
const courseImages = {
  "course1.png": course1,
  "course2.png": course2,
  "course3.png": course3,
  "course5.png": course4,
  "course6.png": course6,
  "GlobeHemisphereWest.svg": GlobeHemisphereWest,
};

const CourseDetailsModal = ({ course, onClose }) => {
  if (!course) return null;

  const courseImage = courseImages[course.items[0].image.split("/").pop()];

  return (
    <div className="modal-overlay">
      <div
        className="modal-content"
        style={{
          backgroundColor: "rgba(58, 59, 61, 1)",
          padding: 0,
          position: "relative",
        }} // Ensure relative positioning for modal content
      >
        <button
          className="close-button"
          onClick={onClose}
          style={{
            position: "absolute", // Absolute positioning to stay on top of the content
            top: "10px", // Adjust to the desired position from the top
            right: "10px", // Adjust to the desired position from the right
            zIndex: 10, // Ensure it's above all other elements
            backgroundColor: "white",
            padding: 5,
            borderRadius: "50%", // Make it a circular button
          }}
        >
          <X
            size={20}
            color="rgba(96, 98, 102, 1)"
            style={{ marginLeft: "auto", marginRight: "auto" }}
          />
        </button>

        {courseImage && (
          <div className="modalMainImage">
            <img src={courseImage} alt={course.items[0].title} />
          </div>
        )}
        <div className="MainView">
          <h2>{course.items[0].title}</h2>

          <ul>
            {course.items[0].details.map((detail, index) => (
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: 20, height: 20 }}>
                  <Dot size={20} color="#A5A7AD" />
                </div>

                <li key={index}>{detail}</li>
              </div>
            ))}
          </ul>
        </div>
        <div className="BottomView">
          {" "}
          <h1 className="modalmain">2.Networking Implementations.</h1>
          <ul>
            {course.items[0].details2 &&
              course.items[0].details2.map((detail2, index) => (
                <div
                  style={{ display: "flex", flexDirection: "row" }}
                  key={index}
                >
                  <div style={{ width: 20, height: 20 }}>
                    <Dot size={20} color="#A5A7AD" />
                  </div>
                  <li>{detail2}</li>
                </div>
              ))}
          </ul>
          {courseImage && (
            <div className="modalMainImage">
              <img src={courseImage} alt={course.items[0].title} />
            </div>
          )}
        </div>

        <div className="BottomView" style={{ marginTop: 40 }}>
          {" "}
          <h1 className="modalmain">2.Networking Implementations.</h1>
          <ul>
            {course.items[0].details2 &&
              course.items[0].details2.map((detail2, index) => (
                <div
                  style={{ display: "flex", flexDirection: "row" }}
                  key={index}
                >
                  <div style={{ width: 20, height: 20 }}>
                    <Dot size={20} color="#A5A7AD" />
                  </div>
                  <li>{detail2}</li>
                </div>
              ))}
          </ul>
          <div className="borderwidth"></div>
        </div>
        <div style={{ paddingInline: 50 }}>
          <button>
            <div className="ModalButton1">
              Зарегистрируйтесь сейчас
              <ArrowRight size={20} />
            </div>
          </button>
          <button>
            <div
              className="ModalButton1"
              style={{
                backgroundColor: "rgba(158, 159,161, 1)",
                color: "white",
              }}
            >
              Поделиться
              <ShareNetwork size={20} />
            </div>
          </button>
          <button onClick={onClose}>
            <div
              className="ModalButton1"
              style={{ backgroundColor: "rgba(58, 59, 61, 1)", color: "white" }}
            >
              <X size={20} />
              Закрыть
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

const CourseCatalog = () => {
  const [selectedCategory, setSelectedCategory] = useState("Все");
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    if (selectedCategory === "Все") {
      setFilteredCourses(coursesData.courses);
    } else {
      setFilteredCourses(
        coursesData.courses.filter(
          (course) => course.category === selectedCategory
        )
      );
    }
  }, [selectedCategory]);

  const openCourseDetails = (course) => {
    setSelectedCourse(course);
  };

  const closeCourseDetails = () => {
    setSelectedCourse(null);
  };

  return (
    <div className="course-catalog">
      <div className="categories">
        <img src={folder} alt="folder" />
        {coursesData.categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`category-button ${
              selectedCategory === category ? "active" : ""
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="courses">
        {filteredCourses.map((course) => {
          const courseImage =
            courseImages[course.items[0].image.split("/").pop()];
          return (
            <div className="bordersolid" key={course.items[0].id}>
              <div>
                <img src={usti} alt="usti" />
                <div className="cardBottom">
                  <div className="course-card">
                    {courseImage && (
                      <img src={courseImage} alt={course.items[0].title} />
                    )}
                    <h3 className="custom-text">{course.items[0].title}</h3>
                    <div className="textContainer">
                      <div className="textrow">
                        <img
                          src={monitor}
                          alt="Monitor"
                          style={{ width: 20, height: 20, marginLeft: 5 }}
                        />
                        <p className="texts">
                          {course.items[0].lessons} модуль
                        </p>
                      </div>
                      <div className="textrow">
                        <img
                          src={calendar}
                          alt="calendar"
                          style={{ width: 20, height: 20, marginLeft: 5 }}
                        />
                        <p className="texts">{course.items[0].duration} дней</p>
                      </div>
                      <div className="textrow">
                        <img
                          src={price}
                          alt="price"
                          style={{ width: 20, height: 20, marginLeft: 5 }}
                        />
                        <p className="texts">
                          от ${course.items[0].price.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Buttons">
                  <button
                    className="button"
                    onClick={() => openCourseDetails(course)}
                  >
                    Узнать больше
                  </button>

                  <button
                    className="button2"
                    onClick={() => openCourseDetails(course)}
                  >
                    Начинать
                    <ArrowDownRight
                      size={20}
                      color="black"
                      style={{ marginLeft: 5 }}
                    />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {selectedCourse && (
        <CourseDetailsModal
          course={selectedCourse}
          onClose={closeCourseDetails}
        />
      )}
    </div>
  );
};

export default CourseCatalog;
