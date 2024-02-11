import About from "./About";
import '../../App.css'
import Accord from "./Accordians";
import Projects from "./Projects";

function Home() {
  return (
    <div className="relative rounded-3xl overflow-hidden w-full min-h-screen z-20">
      <About/>
      <Accord/>
      <Projects/>
    </div>
  );
}

export default Home;
