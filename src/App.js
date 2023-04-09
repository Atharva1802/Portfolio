import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Atharva Bhawsar",
    location: "Ujjain, India",
    email: "workmail.atharva@gmail.com",
    availability: "Open to work",
    brand:
      "My brand is all about crafting impactful and seamless user interfaces that leave a lasting impression. As a Frontend Developer and content creator on Twitter and Hashnode, I specialize in HTML5, CSS, JavaScript, React, Vite, and VueJS. Let me help you bring your vision to life with my expertise in creating stunning and user-friendly interfaces.",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
