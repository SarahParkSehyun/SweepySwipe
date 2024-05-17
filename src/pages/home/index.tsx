import FirstSection from "./firstSection/firstSection";
import HeroSection from "./heroSection";
import "./style.scss";

export default function Home() {
  return (
    <div className="main-container">
      <HeroSection />
      <FirstSection />
    </div>
  );
}
