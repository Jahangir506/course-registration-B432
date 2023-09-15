import "./App.css";
import Cart from "./components/Cart/Cart";
import CourseCards from "./components/CourseCards/CourseCards";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <div className="bg-gray-100 py-8">
        <Header></Header>
        <div className="flex max-w-max mx-auto">
          <CourseCards></CourseCards>
          <Cart></Cart>
        </div>
      </div>
    </>
  );
}

export default App;
