import PropTypes from 'prop-types';

const Cart = ({ addCourseDetails }) => {
  return (
    <div>
      <div className="w-4/1 mx-auto ml-8">
        <div className="card w-80 bg-base-100 p-1">
          <div className="card-body p-4">
            <h3 className="text-[#2F80ED] font-bold border-b-2 pb-3">
              Credit Hour Remaining 7 hr
            </h3>
            <div>
              <h3 className="font-bold mb-3">Course Name</h3>
              {addCourseDetails.forEach((addCourseDetail, idx) => (
               <div key={idx} className="my-2">
                   <p className="text-sm"> {++idx}.<span className='ml-1'>{addCourseDetail.course_name}</span></p>
               </div>
              ))}
            </div>
            <h1 className="font-medium border-t-2 border-b-2 py-3 mt-3 mb-2">Total Credit Hour: 13</h1>
            <h1 className="font-medium">Total Price: USD</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

Cart.propTypes = {
  addCourseDetails: PropTypes.array.isRequired
}

export default Cart;

