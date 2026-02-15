const Explore = () => {
  const features = [
    {
      title: "Scalability",
      description:
        "Our platform grows with your business, handling large volumes of data and expanding operations without compromising performance.",
    },
    {
      title: "Security",
      description:
        "Advanced encryption, role-based access, and continuous monitoring ensure your data remains protected and regulatory-compliant.",
    },
    {
      title: "Intelligence",
      description:
        "Leverage AI-driven insights and analytics to make proactive decisions, automate workflows, and optimize governance processes.",
    },
  ];

  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 animate-pastelMove bg-[length:200%_200%]"
      style={{
        backgroundImage: "linear-gradient(270deg, #fbcfe8, #bfdbfe, #e9d5ff)",
      }}
    >
      <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
        Our Vision & Innovation
      </h1>

      <p className="max-w-3xl text-lg leading-relaxed text-gray-900">
        We are building a powerful enterprise-grade platform designed to
        transform governance, risk, and compliance operations through
        intelligent automation, scalable architecture, and modern infrastructure
        strategies.
      </p>

      <div className="mt-10 grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 rounded-xl hover:scale-105 transition duration-300 shadow-xl"
            style={{
              background: "rgba(255, 255, 255, 0.6)", // soft frosted glass
              backdropFilter: "blur(10px)",
            }}
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              {feature.title}
            </h3>
            <p className="text-gray-700">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Explore;
