import { createFileRoute } from "@tanstack/react-router";
import { Reveal, WaveDivider } from "../../components/ui/Animations";
import { ArrowUpRight, Factory, CheckCircle } from "lucide-react";
import { PageHero } from "../../components/ui/PageHero";

export const Route = createFileRoute("/industries/discrete-manufacturing")({
  component: IndustryPage,
});

function IndustryPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <PageHero
        title="Manufacturing Efficiency Isn't a One-Time Project. It's a System."
        subtitle="We help discrete manufacturers reduce cycle times, control scrap rates, and eliminate unplanned downtime with SAP, IoT analytics, and Digital Twin solutions."
        breadcrumbs={[{ label: "Industries", href: "/industries" }, { label: "Manufacturing" }]}
        image="https://images.unsplash.com/photo-1565514020179-0c6ca70cb135?q=80&w=2070&auto=format&fit=crop"
        icon={<div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-glow"><Factory className="h-8 w-8" /></div>}
        ctaText="Talk to Our Manufacturing Experts"
      />

      {/* The Challenges & How We Help */}
      <section className="section-dark container mx-auto px-6 max-w-7xl relative z-10 py-24">
        <div className="grid lg:grid-cols-2 gap-16">
          <Reveal delay={0.1}>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">The Challenges We Solve</h2>
              <p className="text-muted-foreground leading-relaxed text-lg border-l-4 border-brand/50 pl-6 py-2 bg-muted/10 rounded-r-2xl">
                Discrete manufacturers face volatile supply chains, strict compliance demands, and thin operating margins. Unplanned equipment failures disrupt delivery schedules, while paper-based floor audits make quality control slow and reactive.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">How We Help</h2>
              <div className="space-y-6">
                {[{"title":"Smart Manufacturing (SAP Digital Supply Chain)","desc":"Connect production floor schedules directly to material requirements and customer billing."},{"title":"CAD/CAM & PLM Integration","desc":"Bridging the gap between engineering design teams and production lines to ensure product data consistency."},{"title":"IoT & Predictive Maintenance (D3S)","desc":"Stream machine data dynamically to forecast equipment failures before they trigger an line stoppage."},{"title":"Digital Twin Solutions","desc":"Model virtual assets and physical workflows to test floor changes safely before investing capital."}].map((s, i) => (
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
