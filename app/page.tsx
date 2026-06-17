import { Analytics } from "@/components/sections/Analytics";
import { CTA } from "@/components/sections/CTA";
import { FAQ } from "@/components/sections/FAQ";
import { Features } from "@/components/sections/Features";
import { FinanceDashboard } from "@/components/sections/FinanceDashboard";
import { Hero } from "@/components/sections/Hero";
import { PaymentWorkflow } from "@/components/sections/PaymentWorkflow";
import { Pricing } from "@/components/sections/Pricing";
import { Security } from "@/components/sections/Security";
import { Testimonials } from "@/components/sections/Testimonials";

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
