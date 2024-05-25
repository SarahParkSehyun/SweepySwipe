import FirstSection from "./firstSection";
import HeroSection from "./heroSection";
import ReviewSection from "./reviewSection";
import "./style.scss";

export default function Home() {
  return (
    <div className="main-container">
      <HeroSection />
      <FirstSection />
      <ReviewSection />
    </div>
  );
}
