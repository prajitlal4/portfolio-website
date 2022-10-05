import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div>
      <div className="w-screen mx-auto flex justify-center">
        <NavBar /> 
      </div>
      <Home />
      <About />
      <Portfolio />
    </div>
  );
}

export default App;
