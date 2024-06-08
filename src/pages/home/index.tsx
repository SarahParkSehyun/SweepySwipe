import { Fab } from "@mui/material";
import FirstSection from "./firstSection";
import HeroSection from "./heroSection";
import PartnerSection from "./partnerSection";
import ReviewSection from "./reviewSection";
import "./style.scss";
import ChatBox from "./chatBox";

export default function Home() {
  return (
    <div className="main-container">
      <HeroSection />
      <FirstSection />
      <ReviewSection />
      <PartnerSection />
      <ChatBox />
    </div>
  );
}
