# System Overview

```mermaid
flowchart TD
    V[Visitor] --> W[FinEdge Website]
    W --> H[Home Page]
    W --> F[Features Page]
    W --> P[Pricing Page]
    W --> S[Security Page]
    W --> C[Contact Page]

    H --> Hero
    H --> FD[Finance Dashboard]
    H --> PW[Payment Workflow]
    H --> Feat[Features]
    H --> An[Analytics]
    H --> Sec[Security]
    H --> Pr[Pricing]
    H --> CTA[CTA]

    C --> Form[Demo Request Form]
    Form --> CRM[Future CRM Integration]
    Form --> Email[Future Email Notification]
```

## Explanation

Visitors arrive at the FinEdge website and navigate across five pages: Home, Features, Pricing, Security, and Contact. The home page is the primary conversion surface, combining product positioning (Hero), proof of capability (Finance Dashboard, Payment Workflow, Analytics), trust signals (Security), commercial intent (Pricing), and repeated calls to action.

The contact page captures demo requests through a structured form. In a production deployment, submissions would route to a CRM system and trigger email notifications to the sales team.

All pages share a common layout (Navbar + Footer) and draw content from static data files in the `data/` directory.
