import Navbar from "./Navbar";
import Front from "./Front";
import Landing from "./Landing";
import "../../App.css";


function Home() {
  return (
    <div className="antialiased font-overusedgrotesk  bg-accent-200">
      <Front />
      <Navbar />
      <Landing />
    </div>
  );
}

export default Home;
