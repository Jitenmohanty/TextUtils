import "./App.css";
import Navbar from "./components/Navbar";
import TextForms from "./components/TextForms";

function App() {
  return (
    <>
      <Navbar tittle="TextUtils" about="About Us" />
      <div className="container">
        <TextForms heading="Add text to analyze.." />
      </div>
    </>
  );
}

export default App;
