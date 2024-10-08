// App.js
import "./App.css";
import CourseCalendar from "./component/CourseCalendar/CourseCalendar";
import Courses from "./component/Courses/Courses";
import CoursePrice from "./component/CoursesPrice/CoursesPrice";
import Hero from "./component/Hero/Hero";
import Navbar from "./component/Navbar/Navbar";
import ConsultationForm from "./component/Sub/Sub";
import coursesData from "./courses.json";

function App() {
  return (
    <div className="scrollable-container">
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <div id="courses">
        <Courses />
      </div>
      <div id="pricing">
        <CoursePrice data={coursesData} />
      </div>
      <div id="calendar">
        <CourseCalendar />
      </div>
      <div id="contact">
        <ConsultationForm />
      </div>
    </div>
  );
}

export default App;
