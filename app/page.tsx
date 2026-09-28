import Hero from "../components/hero";
import Navbar from "@/components/navbar"
import Fin from "@/components/footer"
import DashboardPreview from "@/components/DashboardPreview"
import CoreModules from "@/components/CoreModules"
import WorkplaceAdaptability from "@/components/WorkplaceAdaptability"
import OperationalMetrics from "@/components/OperationalMetrics"
import AIChatbotSection from "@/components/AIChatbotSection"
import CTABanner from "@/components/CTABanner"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <DashboardPreview />
      <CoreModules />
      <WorkplaceAdaptability />
      <OperationalMetrics />
      <AIChatbotSection />
      <CTABanner />
      <Fin />
    </main>
  );
}