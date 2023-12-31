import PropTypes from 'prop-types';
import { FaBookOpen, FaDollarSign } from "react-icons/fa";

const CourseCard = ({ courseCard,handleToSelectCourse }) => {
  const { img, course_details, course_name, credit, course_price } = courseCard;

  return (
    <div>
      <div className="card w-80 bg-base-100 duration-[.3s] hover:translate-y-[-4px] ">
        <figure className="p-4">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="px-4 pb-4 pt-2">
          <h2 className="font-semibold mb-4">{course_name}</h2>
          <p className="opacity-90 text-sm h-[70px]">{course_details}</p>
          <div className="flex justify-between my-5 opacity-90">
            <p className="flex items-center">
              <FaDollarSign />
              <span className="ml-3">Price: {course_price} </span>
            </p>
            <p className="flex items-center">
              <FaBookOpen />
              <span className="ml-3">Credit: {credit}hr</span>
            </p>
          </div>
          <div className="card-actions justify-center mt-5">
            <button onClick={()=> handleToSelectCourse(courseCard)} className="w-full bg-[#2F80ED] text-white py-1 px-2 rounded hover:bg-blue-700">
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

CourseCard.propTypes = {
  courseCard: PropTypes.object.isRequired,
  handleToSelectCourse: PropTypes.func.isRequired
}

export default CourseCard;
