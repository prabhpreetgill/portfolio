import "./App.css";
import Home from "./Components/Home/Home";
import Black from "./Components/Black/Black";
import Footer from "./Components/Footer/Footer";
import SmoothScroll from "./scripts/SmoothScroll";

function App() {
  return (
      <div className="antialiased font-overusedgrotesk  bg-accent-200">
        <SmoothScroll duration={800} delay={5000} />
          <Home />
        <Black />
        <Footer />
      </div>
  );
}

export default App;
