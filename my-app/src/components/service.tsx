const Services = () => {
  const items: string[] = [
    "Enterprise Architecture",
    "Secure System Design",
    "Cloud-First Infrastructure",
  ];

  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-b from-black to-gray-900 text-center px-6"
    >
      <h2 className="text-4xl font-bold mb-12 text-purple-400">What We Do</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="p-8 bg-gray-800 rounded-xl hover:scale-105 transition duration-300 shadow-xl"
          >
            <h3 className="text-xl font-semibold mb-4">{item}</h3>
            <p className="text-gray-400">
              Delivering innovative and secure enterprise-grade solutions built
              for long-term scalability.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
