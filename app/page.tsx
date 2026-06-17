import { Hero } from "@/components/sections/Hero";
import { FinanceDashboard } from "@/components/sections/FinanceDashboard";
import { PaymentWorkflow } from "@/components/sections/PaymentWorkflow";
import { Features } from "@/components/sections/Features";
import { Analytics } from "@/components/sections/Analytics";
import { Security } from "@/components/sections/Security";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <FinanceDashboard />
      <PaymentWorkflow />
      <Features />
      <Analytics />
      <Security />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
