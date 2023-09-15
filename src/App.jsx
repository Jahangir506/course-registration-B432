import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Cart from "./components/Cart/Cart";
import CourseCards from "./components/CourseCards/CourseCards";
import Header from "./components/Header/Header";

function App() {
  const [addCourseDetails, setAddCourseDetails] = useState([]);
  const [credit, setCredit] = useState(0)
  const [totalPrice , setTotalPrice] = useState(0)
  const [remaining, setRemaining] = useState(0)

  const handleToSelectCourse = (course) => {
    let sum = course.credit
    let sumTotalPrice = course.course_price

    const isExist = addCourseDetails.find(itemId => itemId.id === course.id)
    if(isExist){
     toast('👉 This item is already selected.', {
      position:"top-center",
     })
    }
    else{
      addCourseDetails.forEach(courseCredit => {
          sum += courseCredit.credit
          sumTotalPrice += courseCredit.course_price
      })
      let remainingCredit = 20 - sum
     if(sum > 20 || remainingCredit < 0){
      toast('🤨Oops! No more than twenty credits may be taken and Your Remaining Credit hours zero.', {
        position:"top-center",
        theme:"colored"
       })
     }else{
      setCredit(sum)
      setTotalPrice(sumTotalPrice)
      setRemaining(remainingCredit)
     }
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
           credit = {credit}
           totalPrice = {totalPrice}
           remaining = {remaining}
          ></Cart>
          <ToastContainer />
        </div>
      </div>
    </>
  );
}

export default App;
