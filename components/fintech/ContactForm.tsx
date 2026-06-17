"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";

const useCaseOptions = [
  { value: "", label: "Select a use case" },
  { value: "payment-platform", label: "Payment Platform" },
  { value: "invoice-automation", label: "Invoice Automation" },
  { value: "expense-management", label: "Expense Management" },
  { value: "financial-dashboard", label: "Financial Dashboard" },
  { value: "banking-product", label: "Banking Product" },
  { value: "fintech-landing", label: "Fintech Landing Page" },
  { value: "custom-fintech", label: "Custom Fintech Platform" },
];

const companySizeOptions = [
  { value: "", label: "Select company size" },
  { value: "1-10", label: "1–10 employees" },
  { value: "11-50", label: "11–50 employees" },
  { value: "51-200", label: "51–200 employees" },
  { value: "201-500", label: "201–500 employees" },
  { value: "500+", label: "500+ employees" },
];

const roleOptions = [
  { value: "", label: "Select your role" },
  { value: "founder", label: "Founder / CEO" },
  { value: "cfo", label: "CFO / Finance Lead" },
  { value: "operations", label: "Operations" },
  { value: "product", label: "Product" },
  { value: "engineering", label: "Engineering" },
  { value: "other", label: "Other" },
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-accent-emerald/30 bg-accent-emerald/5 p-8 text-center">
        <h3 className="text-xl font-semibold text-primary">Demo request received</h3>
        <p className="mt-2 text-muted-foreground">
          Thank you for your interest in FinEdge. Our team will follow up within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Input label="Full name" name="name" required placeholder="Jane Smith" />
        <Input
          label="Work email"
          name="email"
          type="email"
          required
          placeholder="jane@company.com"
        />
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <Input label="Company" name="company" required placeholder="Acme Inc." />
        <Select label="Your role" name="role" required options={roleOptions} />
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <Select
          label="Company size"
          name="companySize"
          required
          options={companySizeOptions}
        />
        <Select
          label="Fintech use case"
          name="useCase"
          required
          options={useCaseOptions}
        />
      </div>
      <Textarea
        label="Message"
        name="message"
        placeholder="Tell us about your financial operations needs..."
        required
      />
      <Button type="submit" size="lg" className="w-full sm:w-auto">
        Request Demo
      </Button>
    </form>
  );
}
