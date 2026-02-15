const Explore = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-r from-indigo-900 via-black to-purple-900 text-white">
      <h1 className="text-5xl md:text-6xl font-bold mb-6">
        Our Vision & Innovation
      </h1>

      <p className="max-w-3xl text-gray-300 text-lg leading-relaxed">
        We are building a powerful enterprise-grade platform designed to
        transform governance, risk, and compliance operations through
        intelligent automation, scalable architecture, and modern infrastructure
        strategies.
      </p>

      <div className="mt-10 grid md:grid-cols-3 gap-8">
        {["Scalability", "Security", "Intelligence"].map((item, index) => (
          <div
            key={index}
            className="p-6 bg-gray-800 rounded-xl hover:scale-105 transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">{item}</h3>
            <p className="text-gray-400">
              Designed for modern enterprise ecosystems.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Explore;
