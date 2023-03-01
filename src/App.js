import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import "./index.css";
function App() {
  return (
    <div id="app" className="flex flex-col justify-between ">
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
