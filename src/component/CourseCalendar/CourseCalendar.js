import React from "react";
import "./CourseCalendar.css"; // Import your CSS file for styling

const CourseCalendar = () => {
  const courses = [
    {
      name: "CompTIA Network+",
      code: "N10-009",
      date: "По требованию",
      duration: "5 дней, 40 часов",
      time: "Пн-Пт",
      price: "724736",
      type: "Обучение под руководством инструктора",
      link: "Включает ваучер на экзамен",
    },
    {
      name: "CompTIA Security+",
      code: "SY0-701",
      date: "По требованию",
      duration: "10 дней",
      time: "Пн-Пт",
      price: "724736",
      type: "Обучение под руководством инструктора",
      link: "Включает ваучер на экзамен",
    },
    {
      name: "CCNA",
      code: "200-301",
      date: "По требованию",
      duration: "5 дней, 40 часов",
      time: "Пн-Пт",
      price: "724736",
      type: "Обучение под руководством инструктора",
      link: "Включает ваучер на экзамен",
    },
    {
      name: "IBM QRadar",
      code: "C1000-162",
      date: "По требованию",
      duration: "5 дней, 40 часов",
      time: "Пн-Пт",
      price: "724736",
      type: "Обучение под руководством инструктора",
      link: "Включает ваучер на экзамен",
    },
    {
      name: "Splunk",
      code: "Splunk Core Certified User",
      date: "По требованию",
      duration: "2 дня, 12 часов",
      time: "Пн-Пт",
      price: "724736",
      type: "Обучение под руководством инструктора",
      link: "Включает ваучер на экзамен",
    },
    {
      name: "CrowdStrike",
      code: "CCFA",
      date: "По требованию",
      duration: "4 дня, 24 часа",
      time: "Пн-Пт",
      price: "1 999 999",
      type: "Обучение под руководством инструктора",
      link: "Включает ваучер на экзамен",
    },
  ];

  return (
    <div className="course-calendar">
      <h1>Календарь курсов</h1>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Название курса</th>
              <th>Код занятия</th>
              <th>Дата</th>
              <th>Продолжительность</th>
              <th>Время</th>
              <th>Цена</th>
              <th>Тип</th>
              <th>Вводный курс</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={index}>
                <td>{course.name}</td>
                <td>{course.code}</td>
                <td>{course.date}</td>
                <td>{course.duration}</td>
                <td>{course.time}</td>
                <td>{course.price}</td>
                <td>{course.type}</td>
                <td>{course.link}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CourseCalendar;
