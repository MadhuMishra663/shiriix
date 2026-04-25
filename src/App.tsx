import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Explore from "./components/explore";

function App() {
  return (
    <>
      <div className="min-h-screen bg-dark-900 text-white font-inter">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
