import GetInTouch from "./components/GetInTouch";
import Hero from "./components/Hero";
import OurMotto from "./components/OurMotto";
import OurProcess from "./components/OurProcess";
import OurServices from "./components/OurServices";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <div className="font-inter ">
      <Hero />
      <WhyChooseUs />
      <OurServices />
      <OurProcess />
      <OurMotto />
      <GetInTouch />
    </div>
  );
}
