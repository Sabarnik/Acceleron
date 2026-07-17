import { createFileRoute } from "@tanstack/react-router";
import { Cloud, CheckCircle } from "lucide-react";
import { Reveal, WaveDivider } from "../../components/ui/Animations";
import { PageHero } from "../../components/ui/PageHero";
import { UIMockup, ProcessFlow, MetricBar } from "../../components/ui/ProductShowcase";

export const Route = createFileRoute("/services/eas")({
  component: EASPage,
});

function EASPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <PageHero
        title="Enterprise Application Services (EAS)"
        subtitle="Enterprise-grade SAP, Salesforce, and Zoho consulting, implementation, and managed services built on decades of hands-on delivery experience."
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "EAS" }]}
        image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
        icon={<div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-glow"><Cloud className="h-8 w-8" /></div>}
      />

      <section className="section-dark container mx-auto px-6 max-w-7xl relative z-10 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Unifying Your Digital Core</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                From monolithic legacy ERPs to fragmented CRM solutions, we help large organizations consolidate their operations into intelligent, scalable platforms. 
              </p>
              <div className="space-y-4">
                {[
                  "SAP S/4HANA & RISE: Greenfield deployments and migrations.",
                  "Salesforce Ecosystem: CPQ, Sales Cloud, Service Cloud.",
                  "Zoho Suite: Zoho Books, HRMS, and CRM integration.",
                  "Custom ERP Extensions & Middleware."
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-brand shrink-0" />
                    <p className="text-foreground font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          
          <Reveal delay={0.2}>
            <UIMockup title="SAP S/4HANA Dashboard">
              <div className="space-y-6">
                <div className="grid grid-cols-3 gap-4">
                  <div className="rounded-xl bg-muted/50 p-4 border border-border/50">
                    <div className="text-xs text-muted-foreground mb-1">Total Revenue</div>
                    <div className="text-2xl font-bold text-foreground">$12.4M</div>
                  </div>
                  <div className="rounded-xl bg-muted/50 p-4 border border-border/50">
                    <div className="text-xs text-muted-foreground mb-1">Open Orders</div>
                    <div className="text-2xl font-bold text-foreground">842</div>
                  </div>
                  <div className="rounded-xl bg-muted/50 p-4 border border-border/50">
                    <div className="text-xs text-muted-foreground mb-1">Utilization</div>
                    <div className="text-2xl font-bold text-foreground">94%</div>
                  </div>
                </div>
                <div className="rounded-xl bg-muted/50 p-6 border border-border/50">
                  <div className="text-sm font-medium text-foreground mb-4">Resource Allocation</div>
                  <div className="space-y-4">
                    <MetricBar label="Manufacturing" value={78} />
                    <MetricBar label="Logistics" value={92} />
                    <MetricBar label="Procurement" value={45} />
                  </div>
                </div>
              </div>
            </UIMockup>
          </Reveal>
        </div>
      </section>

      <WaveDivider from="dark" to="white" />

      <section className="container mx-auto px-6 max-w-7xl relative z-10 py-24">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Implementation Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Our proven methodology ensures zero business disruption during core enterprise rollouts.</p>
          </div>
        </Reveal>
        
        <ProcessFlow 
          steps={[
            { step: "01", title: "Discovery", desc: "Process mapping and gap analysis" },
            { step: "02", title: "Design", desc: "Solution architecture and blueprinting" },
            { step: "03", title: "Build", desc: "Configuration and custom development" },
            { step: "04", title: "Deploy", desc: "Data migration, testing, and go-live" }
          ]}
        />
      </section>
    </main>
  );
}
