import React from "react";
import "./CourseDetailModal.css";

const CourseDetailsModal = ({ course, onClose }) => {
  if (!course) return null;

  const courseItem = course.items[0];

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>{courseItem.title}</h2>
        <img
          src={courseItem.image}
          alt={courseItem.title}
          className="course-image"
        />
        <p>
          <strong>Category:</strong> {course.category}
        </p>
        <p>
          <strong>Duration:</strong> {courseItem.duration} days
        </p>
        <p>
          <strong>Lessons:</strong> {courseItem.lessons} modules
        </p>
        <p>
          <strong>Price:</strong> ${courseItem.price.toLocaleString()}
        </p>
        <p>
          <strong>Students:</strong> {courseItem.students}
        </p>
        <h3>Course Content:</h3>
        <ul>
          {courseItem.details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
        <button className="button2">Register for Course</button>
      </div>
    </div>
  );
};

export default CourseDetailsModal;
