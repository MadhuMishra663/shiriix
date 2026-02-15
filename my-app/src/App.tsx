// import Navbar from "./navbar";
// import Hero from "./hero";
// import About from "./about";
// import Services from "./service";
// import Contact from "./contact";
// import Footer from "./footer";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <About />
//       <Services />
//       <Contact />
//       <Footer />
//     </>
//   );
// }

// export default App;

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Explore from "./components/explore";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-[#fbc2eb] via-[#a6c1ee] to-[#f6d365] bg-[length:300%_300%] animate-pastelMove">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
