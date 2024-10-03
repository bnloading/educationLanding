import React, { useState, useEffect } from "react";
import styles from "./style.module.css";
import arrow from "../../assets/arrow_right_icon.svg";
import { ArrowRight, Check } from "@phosphor-icons/react";
const CoursePrice = ({ data }) => {
  // Automatically set the first category as selected by default
  const [selectedCategory, setSelectedCategory] = useState(
    data.categories[0] // Automatically select the first category
  );

  // Filter courses based on the selected category
  const filteredCourses =
    data.courses.find((category) => category.category === selectedCategory)
      ?.items || [];

  const numCourses = filteredCourses.length;

  return (
    <div className={styles.courseCatalog}>
      <h1 className={styles.h11}>Стоимость курсы</h1>

      {/* Render category buttons, except for 'Все' */}
      <div className={styles.categoryButtons}>
        {data.categories
          .filter((category) => category !== "Все") // Exclude "Все" button
          .map((category) => (
            <button
              key={category}
              className={selectedCategory === category ? styles.active : ""}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
      </div>

      <div
        className={`${styles.courseGrid} ${
          numCourses === 1
            ? styles.singleItem
            : numCourses === 2
            ? styles.twoItems
            : ""
        }`}
      >
        {/* Map over the filtered courses */}
        {filteredCourses.map((course) => (
          <div key={course.id} className={styles.courseCard}>
            <h2>{course.title}</h2>
            <p className={styles.price}>₽ {course.price.toLocaleString()}</p>
            <button className={styles.registerButton}>
              Зарегистрироваться сейчас
              <ArrowRight size={20} />
            </button>
            <ul className={styles.courseDetails}>
              {course.details.map((detail, index) => (
                <div className={styles.check}>
                  <span style={{ width: "20px", height: "20px" }}>
                    <Check size={20} color="#3e3d3b" />
                  </span>
                  <li key={index}>{detail}</li>
                </div>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursePrice;
