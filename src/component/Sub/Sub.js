import React, { useState } from "react";
import forumback from "../../assets/square pattern.svg";
import "./Sub.css"; // Assuming you have an external CSS file
import { PaperPlaneTilt } from "@phosphor-icons/react";
const ConsultationPage = () => {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [email, setEmail] = useState(""); // Renamed for clarity
  const [additionalInfo, setAdditionalInfo] = useState(""); // State for the third form input
  const [emailValid, setEmailValid] = useState(true);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email.includes("@")) {
      setEmailValid(false); // Set invalid if '@' is missing
      return;
    }
    setEmailValid(true);
    console.log("Form submitted:", { name, course, email });
  };
  return (
    <div className="container">
      <img src={forumback} alt="background pattern" className="background" />
      <div className="gradiant"></div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="title-con">
          <h2 className="title">Привет! Мы готовы вас проконсультировать</h2>
        </div>
        <div className="form" onSubmit={handleSubmit}>
          <div className="form-row">
            <h1>Меня зовут</h1>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="фамилия и имя"
              className="input1"
            />

            <h1>и мне интересно</h1>
            <input
              type="text"
              id="course"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              placeholder="название курса"
              className="input1"
            />
          </div>

          <div className="form2">
            <h1>Пожалуйста, свяжитесь со мной по адресу</h1>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              className={`input2 ${!emailValid ? "input-error" : ""}`}
            />
          </div>

          {/* Third Form Section */}
          <div className="form3">
            <h1>По желанию я поделюсь еще:</h1>
            <input
              type="text"
              id="additionalInfo"
              value={additionalInfo}
              onChange={(e) => setAdditionalInfo(e.target.value)}
              placeholder="Ваше сообщение здесь"
              className="input3"
            />
            <button type="submit" className="submit-button">
              <p>Отправить</p>
              <PaperPlaneTilt size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationPage;
