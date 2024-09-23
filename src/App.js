import Navbar from "./Navbar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import { Route, Routes} from "react-router-dom"

function App() {
  return (
    <>
    <Navbar/>
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
    </div>
    
    </>
  );
}

export default App;
