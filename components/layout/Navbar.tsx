"use client";

import { Button } from "@/components/ui/Button";
import { navLinks, siteConfig } from "@/data/faqs";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="glass mx-auto max-w-7xl rounded-none border-x-0 border-t-0 sm:mx-4 sm:mt-4 sm:rounded-2xl">
        <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-primary"
            aria-label={`${siteConfig.name} home`}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent-blue via-accent-cyan to-accent-emerald text-sm text-white">
              F
            </span>
            <span className="text-lg">{siteConfig.name}</span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors min-h-[44px] flex items-center",
                  pathname === link.href
                    ? "text-accent-blue bg-accent-blue/5"
                    : "text-muted-foreground hover:text-primary hover:bg-muted/60"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button href="/contact" variant="ghost" size="sm">
              Log in
            </Button>
            <Button href="/contact" size="sm">
              Start Free Trial
            </Button>
          </div>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-lg text-primary lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          id="mobile-nav"
          className="glass border-t border-border lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="space-y-1 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "block rounded-lg px-4 py-3 text-sm font-medium min-h-[44px]",
                  pathname === link.href
                    ? "text-accent-blue bg-accent-blue/5"
                    : "text-muted-foreground hover:bg-muted/60"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-4">
              <Button href="/contact" variant="secondary" className="w-full">
                Log in
              </Button>
              <Button href="/contact" className="w-full">
                Start Free Trial
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
