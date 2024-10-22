import Header from "@/components/sections/headerSection/headerSection";
import ContactUs from "@/components/sections/contactUsSection/contactUsSection";
import Footer from "@/components/sections/footerSection/footerSection";
import NavBar from "@/components/sections/navSection/navBarSection";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Header />
      <ContactUs />
      <Footer />
    </div>
  );
}
