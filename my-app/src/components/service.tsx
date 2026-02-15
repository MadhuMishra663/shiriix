const Services = () => {
  const services = [
    {
      title: "Governance Management",
      description:
        "Streamline organizational policies, roles, and responsibilities. Ensure transparency and alignment across all business units for effective decision-making.",
    },
    {
      title: "Risk Assessment & Mitigation",
      description:
        "Identify, assess, and monitor risks in real-time. Implement mitigation strategies to reduce exposure and ensure business continuity.",
    },
    {
      title: "Compliance Automation",
      description:
        "Automate regulatory checks and reporting. Stay compliant with industry standards and regulations while reducing manual effort and errors.",
    },
  ];

  return (
    <section
      id="services"
      className="py-24 text-center px-6 animate-pastelMove bg-[length:200%_200%]"
      style={{
        backgroundImage: "linear-gradient(270deg, #fbcfe8, #bfdbfe, #e9d5ff)",
      }}
    >
      <h2 className="text-4xl font-bold mb-12 text-gray-900">What We Do</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-8 rounded-xl hover:scale-105 transition duration-300 shadow-xl"
            style={{
              background: "rgba(255, 255, 255, 0.6)", // frosted glass
              backdropFilter: "blur(10px)",
            }}
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              {service.title}
            </h3>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
