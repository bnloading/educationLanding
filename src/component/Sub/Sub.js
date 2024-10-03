import React, { useState } from "react";
import "./Sub.css";
const ConsultationForm = () => {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would handle form submission, e.g., send data to a server
    console.log("Form submitted:", { name, course, message });
  };

  return (
    <div className="consultation-form">
      <h2 style={{ color: "green" }}>
        Привет! Мы готовы вас проконсультировать
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Меня зовут</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Фамилия и имя"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="course">и мне интересно</label>
          <input
            type="text"
            id="course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            placeholder="Название курса"
          />
        </div>
        <p>
          Пожалуйста, свяжитесь со мной по адресу{" "}
          <a href="mailto:name@example.com">name@example.com</a>
        </p>
        <div className="form-group">
          <label htmlFor="message">По желанию я поделюсь еще:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ваше сообщение здесь"
          />
        </div>
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
};

export default ConsultationForm;
