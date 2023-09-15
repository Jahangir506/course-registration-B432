import { useEffect, useState } from "react";
import CourseCard from "../CourseCard/CourseCard";

const CourseCards = () => {
  const [courseCards, setCourseCards] = useState([]);

  useEffect(() => {
    fetch("courseRg.json")
      .then((res) => res.json())
      .then((data) => setCourseCards(data));
  }, []);

  return (
    <>
      <div className="grid grid-cols-3 gap-8 w-4/3 mx-auto">
        {courseCards.map((courseCard) => (
          <CourseCard key={courseCard.id} courseCard={courseCard}></CourseCard>
        ))}
      </div>
    </>
  );
};

export default CourseCards;
