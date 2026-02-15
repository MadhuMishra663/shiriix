import { useNavigate } from "react-router-dom";
import Typewriter from "./typewriter";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section
      className="h-screen flex flex-col justify-center items-center text-center px-6
      animate-pastelMove bg-[length:200%_200%]"
      style={{
        backgroundImage: "linear-gradient(270deg, #fbcfe8, #bfdbfe, #e9d5ff)",
      }}
    >
      <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-gray-900">
        Building Intelligent Enterprise Solutions
      </h1>
      <Typewriter text="Lead with assurance" speed={180} />
      <br />
      <p className="max-w-2xl text-gray-900 text-lg">
        A product-based startup focused on next-generation governance, risk, and
        compliance innovation.
      </p>

      <button
        onClick={() => navigate("/explore")}
        className="mt-10 px-8 py-3 rounded-full shadow-lg animate-float transition
             bg-white/70 text-gray-900 hover:bg-white/80 backdrop-blur-sm"
      >
        Explore More
      </button>
    </section>
  );
};

export default Hero;
