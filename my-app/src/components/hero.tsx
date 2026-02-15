import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section
      className="h-screen flex flex-col justify-center items-center text-center px-6 
      bg-gradient-to-r from-purple-800 via-black to-indigo-900 
      bg-[length:400%_400%] animate-gradient"
    >
      <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
        Building Intelligent Enterprise Solutions
      </h1>

      <p className="max-w-2xl text-gray-300 text-lg">
        A product-based startup focused on next-generation governance, risk, and
        compliance innovation.
      </p>

      <button
        onClick={() => navigate("/explore")}
        className="mt-10 px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-full shadow-lg animate-float transition"
      >
        Explore More
      </button>
    </section>
  );
};

export default Hero;
