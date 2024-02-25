import OverviewPage from "@/components/Overview";
import HeroPage from "../components/Hero";
import ClientLogos from "@/components/ClientLogo";
import FooterPage from "@/components/Footer";


export default function Home() {
  return (
    <>
      <HeroPage />
      <OverviewPage />
      <ClientLogos />
    </>
  );
}
