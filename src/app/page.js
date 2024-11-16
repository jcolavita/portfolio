import Header from "./components/sections/headerSection/headerSection";
import ContactUs from "./components/sections/contactUsSection/contactUsSection";
import Services from "./components/sections/servicesSection/services.jsx";
import Tecnologies from "./components/sections/tecnologiesSection/tecnologies";

export default function Home() {
  return (
    <div>
      <Header />
      <Services />
      <Tecnologies />
      <ContactUs />
    </div>
  );
}
