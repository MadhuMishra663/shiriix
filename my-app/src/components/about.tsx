const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 text-center animate-pastelMove bg-[length:200%_200%]"
      style={{
        backgroundImage: "linear-gradient(270deg, #fbcfe8, #bfdbfe, #e9d5ff)",
      }}
    >
      <h2 className="text-4xl font-bold mb-8 text-gray-900">About Us</h2>

      <p className="max-w-3xl mx-auto leading-relaxed text-gray-900">
        We are a product-driven startup building advanced enterprise systems in
        the Governance, Risk, and Compliance domain. Our platform is engineered
        with scalability, security, and intelligent automation at its core.
      </p>
    </section>
  );
};

export default About;
