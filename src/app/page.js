import Header from "./components/sections/headerSection/headerSection";
import ContactUs from "./components/sections/contactUsSection/contactUsSection";
import Services from "./components/sections/servicesSection/services.jsx";
import Tecnologies from "./components/sections/tecnologiesSection/tecnologies";
import Projects from "./components/sections/projects/projectsSection";

export default function Home() {
  return (
    <div className=" text-white">
      <Header />
      <Services />
      <Projects />
      <Tecnologies />
      <ContactUs />
    </div>
  );
}
