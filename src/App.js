import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Atharva Bhawsar",
    location: "Goa, India",
    email: "workmail.atharva@gmail.com",
    availability: "Open to work",
    brand:
      "A dynamic blend of designer, engineer, and data analyst, transforming ideas into impactful solutions. With expertise in Power BI, data visualization, and interactive dashboards, I turn complex data into clear, actionable insights. As a creative problem solver, I merge technical precision with design thinking to build intuitive experiences. Passionate about sustainability, technology, and innovation, I strive to deliver solutions that drive growth, efficiency, and meaningful change.",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
