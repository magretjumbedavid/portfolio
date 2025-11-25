import Image from "next/image";
import page from "./Home/page";
import Homes from "./Home/page";
import About from "./About/page";
import Services from "./Services/page";
import Skills from "./Skills/page";
import Contact from "./Contact/page";
export default function Home() {
  return (
    <div>
      <Homes/>
      <About/>
      <Services/>
      <Skills/>
      <Contact/>
    </div>
  );
}
