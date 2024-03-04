import OverviewPage from "@/components/Overview";
import HeroPage from "../components/Hero";
import ClientLogos from "@/components/ClientLogo";
import FooterPage from "@/components/Footer";
import TeamMemberPage from "@/components/TeamMembers";
import TeamMember2 from "@/components/Team-member-sections/TeamMember2";
import Line from "../components/HorizontalLine";


export default function Home() {
  return (
    <>
      
      <HeroPage />
      <OverviewPage />
      <Line />
      <ClientLogos />
      <Line />
      <TeamMember2 />
    </>
  );
}
