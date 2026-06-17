# Technical Notes

## Frontend Architecture

FinEdge uses Next.js App Router with a component-driven architecture. Pages compose section components, which in turn use fintech-specific and shared UI components. Content is stored in static TypeScript data files.

## App Routing

| Route | Page |
|-------|------|
| `/` | Home — all landing sections |
| `/features` | Product features deep-dive |
| `/pricing` | Pricing plans and FAQ |
| `/security` | Security and trust |
| `/contact` | Demo request form |

## Data Structure

```
data/
├── features.ts      # Product features with Lucide icons
├── metrics.ts       # Dashboard metrics and analytics cards
├── transactions.ts  # Transaction mock data
├── workflow.ts      # Payment workflow steps
├── security.ts      # Security/trust features
├── pricing.ts       # Pricing plans
├── testimonials.ts  # B2B testimonials
└── faqs.ts          # FAQ + site config + nav links
```

## Fintech UI Components

```
components/
├── layout/
│   ├── Navbar.tsx
│   └── Footer.tsx
├── sections/
│   ├── Hero.tsx
│   ├── FinanceDashboard.tsx
│   ├── PaymentWorkflow.tsx
│   ├── Features.tsx
│   ├── Analytics.tsx
│   ├── Security.tsx
│   ├── Pricing.tsx
│   ├── Testimonials.tsx
│   ├── FAQ.tsx
│   └── CTA.tsx
├── fintech/
│   ├── FinanceMetricCard.tsx
│   ├── TransactionCard.tsx
│   ├── PaymentStep.tsx
│   ├── FeatureCard.tsx
│   ├── SecurityFeature.tsx
│   ├── PricingCard.tsx
│   └── ContactForm.tsx
└── ui/
    ├── Button.tsx
    ├── Card.tsx
    ├── Badge.tsx
    ├── Section.tsx
    ├── Input.tsx
    ├── Textarea.tsx
    └── Select.tsx
```

## Styling

- Tailwind CSS v4 with `@theme inline` tokens in `app/globals.css`
- Design tokens: blue, cyan, emerald, gold accents
- Dark sections use `.section-dark` utility
- Light sections use `.section-light` utility
- Glass effects for navbar
- Mesh gradient backgrounds for hero

## Animations

Framer Motion is used for:

- Hero entrance animation
- Section reveal on scroll (`whileInView`)
- Staggered card animations
- Reduced motion respected via CSS media query

## Responsiveness

- Mobile-first breakpoints (sm, lg)
- Hamburger navigation on mobile
- Grid layouts adapt from 1 to 2 to 3/4 columns
- Touch-friendly 44px minimum tap targets

## Deployment

Deployed on Vercel with default Next.js settings. See [architecture/deployment.md](../architecture/deployment.md).
