import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import CourseCards from "./components/CourseCards/CourseCards";
import Header from "./components/Header/Header";

function App() {
  const [addCourseDetails, setAddCourseDetails] = useState([]);

  const handleToSelectCourse = (course) => {
    setAddCourseDetails([...addCourseDetails, course])
    
  };
  return (
    <>
      <div className="bg-gray-100 py-8">
        <Header></Header>
        <div className="flex max-w-max mx-auto">
          <CourseCards
            handleToSelectCourse={handleToSelectCourse}
          ></CourseCards>
          <Cart
           addCourseDetails={addCourseDetails}
          ></Cart>
        </div>
      </div>
    </>
  );
}

export default App;
