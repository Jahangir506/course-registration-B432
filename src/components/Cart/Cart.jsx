const Cart = () => {
  return (
    <div className="w-4/1 mx-auto ml-8">
      <div className="card w-80 bg-base-100 p-1">
        <div className="px-4 pb-4 pt-2">
          <h3 className="font-bold mb-4 text-[#2F80ED] border-b-2 pb-3">
            Credit Hour Remaining 7 hr
          </h3>
          <div className="border-b-2 pb-4">
            <h3 className="font-bold mb-4">Course Name</h3>
            <div className="opacity-90">
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
          <h3 className="font-medium mb-4 border-b-2 py-3 opacity-95">
            Total Credit Hour:
          </h3>
          <h2 className="font-medium opacity-95">Total Price: USD</h2>
        </div>
      </div>
    </div>
  );
};

export default Cart;
