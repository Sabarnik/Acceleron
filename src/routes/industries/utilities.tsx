import { createFileRoute } from "@tanstack/react-router";
import { Reveal, WaveDivider } from "../../components/ui/Animations";
import { ArrowUpRight, Zap, CheckCircle } from "lucide-react";
import { PageHero } from "../../components/ui/PageHero";

export const Route = createFileRoute("/industries/utilities")({
  component: IndustryPage,
});

function IndustryPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <PageHero
        title="Reliable Utilities Demand Resilient Systems"
        subtitle="Connect your field workforce, simplify billing operations, and improve grid reliability with SAP and Salesforce solutions built for public and private utility providers."
        breadcrumbs={[{ label: "Industries", href: "/industries" }, { label: "Utilities" }]}
        image="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop"
        icon={<div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-glow"><Zap className="h-8 w-8" /></div>}
        ctaText="Talk to Our Utilities Experts"
      />

      {/* The Challenges & How We Help */}
      <section className="section-dark container mx-auto px-6 max-w-7xl relative z-10 py-24">
        <div className="grid lg:grid-cols-2 gap-16">
          <Reveal delay={0.1}>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">The Challenges We Solve</h2>
              <p className="text-muted-foreground leading-relaxed text-lg border-l-4 border-brand/50 pl-6 py-2 bg-muted/10 rounded-r-2xl">
                Utility companies manage sprawling, capital-intensive infrastructure while dealing with high volumes of billing inquiries, regulatory compliance audits, and critical outage management protocols.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">How We Help</h2>
              <div className="space-y-6">
                {[{"title":"Grid and Asset Lifecycle Management (SAP PM)","desc":"Track health indicators across complex transmission and distribution networks to plan preventative maintenance."},{"title":"Customer Billing & Relations (Salesforce Service Cloud)","desc":"Standardize outage communications and customer billing inquiries across multiple digital channels."},{"title":"Field Force Dispatching","desc":"Automatically schedule utility technicians to repair locations using optimized routes and live GPS data."}].map((s, i) => (
                  <div key={i} className="flex gap-4 p-6 rounded-2xl border border-border/50 bg-background/50 backdrop-blur-xl">
                    <CheckCircle className="h-6 w-6 text-brand shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-1">{s.title}</h4>
                      <p className="text-muted-foreground">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
