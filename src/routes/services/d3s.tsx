import { createFileRoute } from "@tanstack/react-router";
import { Cpu, CheckCircle } from "lucide-react";
import { Reveal, WaveDivider } from "../../components/ui/Animations";
import { PageHero } from "../../components/ui/PageHero";
import { UIMockup, ProcessFlow } from "../../components/ui/ProductShowcase";

export const Route = createFileRoute("/services/d3s")({
  component: D3SPage,
});

function D3SPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <PageHero
        title="Digital, Data & Decision Services (D3S)"
        subtitle="Transforming connected physical assets into actionable intelligence and automated operational outcomes."
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "D3S" }]}
        image="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
        icon={<div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-glow"><Cpu className="h-8 w-8" /></div>}
      />

      <section className="section-dark container mx-auto px-6 max-w-7xl relative z-10 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Intelligence at the Edge</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We bridge the gap between operational technology (OT) and IT, turning raw machine data into predictive insights that prevent downtime.
              </p>
              <div className="space-y-4">
                {[
                  "IoT pipelines for heavy machinery and manufacturing equipment.",
                  "Predictive maintenance algorithms powered by Deep Learning.",
                  "Real-time operational dashboards for shop-floor visibility.",
                  "Data lake architecture and enterprise BI integration."
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
            <UIMockup title="Asset Health Monitoring" accentColor="#10b981">
              <div className="space-y-4">
                {/* Simulated Chart/Graph */}
                <div className="h-32 w-full rounded-xl bg-muted/40 border border-border/50 relative overflow-hidden flex items-end p-4 gap-2">
                  {[40, 65, 45, 80, 55, 90, 75, 40, 60, 50, 70, 85].map((h, i) => (
                    <div 
                      key={i} 
                      className="flex-1 bg-brand/50 rounded-t-sm" 
                      style={{ height: `${h}%` }}
                    />
                  ))}
                  {/* Overlay line */}
                  <div className="absolute top-12 left-0 right-0 h-0.5 bg-red-500/50 border-b border-dashed border-red-500" />
                  <div className="absolute top-8 left-2 text-[10px] text-red-500 font-medium">Critical Threshold</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                   <div className="bg-muted/30 rounded-xl p-4 border border-border/50 flex items-center justify-between">
                     <span className="text-xs text-muted-foreground">Asset Status</span>
                     <span className="px-2 py-1 bg-emerald-500/20 text-emerald-500 text-[10px] font-bold rounded-md">HEALTHY</span>
                   </div>
                   <div className="bg-muted/30 rounded-xl p-4 border border-border/50 flex items-center justify-between">
                     <span className="text-xs text-muted-foreground">Next Maint.</span>
                     <span className="text-sm font-medium text-foreground">14 Days</span>
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Data Value Chain</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">From sensor to boardroom, we ensure data integrity and actionable intelligence.</p>
          </div>
        </Reveal>
        
        <ProcessFlow 
          steps={[
            { step: "01", title: "Ingestion", desc: "IoT sensors, PLCs, and SCADA systems" },
            { step: "02", title: "Processing", desc: "Edge computing and stream analytics" },
            { step: "03", title: "Intelligence", desc: "Machine learning and predictive models" },
            { step: "04", title: "Action", desc: "Dashboards, alerts, and ERP triggers" }
          ]}
        />
      </section>
    </main>
  );
}
