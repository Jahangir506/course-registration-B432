import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Cart from "./components/Cart/Cart";
import CourseCards from "./components/CourseCards/CourseCards";
import Header from "./components/Header/Header";

function App() {
  const [addCourseDetails, setAddCourseDetails] = useState([]);

  const handleToSelectCourse = (course) => {
    console.log(course);
    const isExist = addCourseDetails.find(itemId => itemId.id === course.id)
    
    if(isExist){
     toast('Already selected, cannot select again', {
      position:"top-center"
     })
    }
    else{
      setAddCourseDetails([...addCourseDetails, course])
    }
    
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
          <ToastContainer />
        </div>
      </div>
    </>
  );
}

export default App;
