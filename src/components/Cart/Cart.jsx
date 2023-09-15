import PropTypes from 'prop-types';

const Cart = ({ addCourseDetails, credit, totalPrice, remaining }) => {

  return (
    <div>
      <div className="w-4/1 mx-auto ml-8">
        <div className="card w-80 bg-base-100 p-1">
          <div className="card-body p-4">
            <h3 className="text-[#2F80ED] font-bold border-b-2 pb-3">
              Credit Hour Remaining {remaining} hr
            </h3>
            <div>
              <h3 className="font-bold mb-3">Course Name</h3>
              {addCourseDetails.map((addCourseDetail, idx) => (
               <div key={idx} className="my-2">
                   <p className="text-sm"> {++idx}.<span className='ml-1'>{addCourseDetail.course_name}</span></p>
               </div>
              ))}
            </div>
            <h1 className="font-medium border-t-2 border-b-2 py-3 mt-3 mb-2">Total Credit Hour: {credit}</h1>
            <h1 className="font-medium">Total Price: {totalPrice} USD</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

Cart.propTypes = {
  addCourseDetails: PropTypes.array.isRequired,
  credit: PropTypes.number,
  totalPrice: PropTypes.number,
  remaining: PropTypes.number
}

export default Cart;

