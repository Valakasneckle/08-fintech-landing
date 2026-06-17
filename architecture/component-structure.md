# Component Structure

```mermaid
flowchart TD
    AL[App Layout] --> Nav[Navbar]
    AL --> PC[Page Content]
    AL --> Foot[Footer]

    PC --> Hero
    PC --> FD[FinanceDashboard]
    PC --> PW[PaymentWorkflow]
    PC --> Feat[Features]
    PC --> An[Analytics]
    PC --> Sec[Security]
    PC --> Pr[Pricing]
    PC --> Test[Testimonials]
    PC --> FAQ
    PC --> CTA

    FD --> FMC[FinanceMetricCard]
    FD --> TC[TransactionCard]
    PW --> PS[PaymentStep]
    Feat --> FC[FeatureCard]
    Sec --> SF[SecurityFeature]
    Pr --> PCard[PricingCard]
    CP[Contact Page] --> CF[ContactForm]

    UI[Shared UI] --> Btn[Button]
    UI --> Card
    UI --> Badge
    UI --> Section
    UI --> Input
    UI --> Textarea
    UI --> Select
```

## Explanation

The application uses a layered component hierarchy. The root layout wraps every page with Navbar and Footer. Page content is composed of section components, each responsible for a distinct part of the landing experience.

Fintech-specific components (FinanceMetricCard, TransactionCard, PaymentStep, etc.) handle domain UI patterns. Shared UI primitives (Button, Card, Input, etc.) provide consistent styling and behavior across the entire site.

Content is injected from `data/` files, keeping components presentation-focused and data files content-focused.
