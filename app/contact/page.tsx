import { ContactForm } from "@/components/fintech/ContactForm";
import { Section, SectionHeader } from "@/components/ui/Section";
import { siteConfig } from "@/data/faqs";
import { Mail, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Contact | ${siteConfig.name}`,
  description:
    "Request a FinEdge demo. Tell us about your fintech use case and our team will follow up within one business day.",
};

export default function ContactPage() {
  return (
    <Section className="pt-12">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <SectionHeader
            badge="Contact"
            title="Request a demo"
            description="Tell us about your financial operations needs. We'll show you how FinEdge can help your team manage payments, invoices, and analytics."
            align="left"
          />
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Mail className="h-4 w-4 text-accent-blue" aria-hidden="true" />
              {siteConfig.email}
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Phone className="h-4 w-4 text-accent-blue" aria-hidden="true" />
              +1 (555) 014-2000
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-accent-blue" aria-hidden="true" />
              San Francisco, CA
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
