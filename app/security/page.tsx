import type { Metadata } from "next";
import { Security } from "@/components/sections/Security";
import { CTA } from "@/components/sections/CTA";
import { Section, SectionHeader } from "@/components/ui/Section";
import { siteConfig } from "@/data/faqs";

export const metadata: Metadata = {
  title: `Security | ${siteConfig.name}`,
  description:
    "FinEdge security — encrypted financial workflows, role-based permissions, audit logs, and compliance-ready architecture.",
};

export default function SecurityPage() {
  return (
    <>
      <Section className="pt-12" dark>
        <SectionHeader
          badge="Security"
          title="Trust is the foundation of financial software"
          description="FinEdge is built with security at the core — encrypted workflows, permission controls, and audit-friendly activity logs."
          dark
        />
      </Section>
      <Security />
      <CTA />
    </>
  );
}
