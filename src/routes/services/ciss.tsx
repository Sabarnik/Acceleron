import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, CheckCircle } from "lucide-react";
import { Reveal, WaveDivider } from "../../components/ui/Animations";
import { PageHero } from "../../components/ui/PageHero";
import { UIMockup, ProcessFlow } from "../../components/ui/ProductShowcase";

export const Route = createFileRoute("/services/ciss")({
  component: CISSPage,
});

function CISSPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <PageHero
        title="Cloud, Infrastructure & Security Services (CISS)"
        subtitle="The proactive operational backbone that keeps your enterprise protected and running smoothly 24/7."
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "CISS" }]}
        image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop"
        icon={<div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-glow"><ShieldCheck className="h-8 w-8" /></div>}
      />

      <section className="section-dark container mx-auto px-6 max-w-7xl relative z-10 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Secure, Scalable Foundations</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We design and manage the critical infrastructure that powers your business, ensuring high availability and zero-trust security.
              </p>
              <div className="space-y-4">
                {[
                  "Multi-Cloud Management (AWS, Azure, GCP).",
                  "Cybersecurity: VAPT, ISO 27001 readiness, automated threat detection.",
                  "Enterprise Collaboration: Microsoft 365, Google Workspace, Zimbra.",
                  "Disaster Recovery & Business Continuity Planning."
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
            <UIMockup title="Security Operations Center (SOC)" accentColor="#f59e0b">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted/30 rounded-xl p-4 border border-border/50">
                    <div className="text-xs text-muted-foreground mb-1">Threat Level</div>
                    <div className="text-lg font-bold text-amber-500">ELEVATED</div>
                  </div>
                  <div className="bg-muted/30 rounded-xl p-4 border border-border/50">
                    <div className="text-xs text-muted-foreground mb-1">Active Incidents</div>
                    <div className="text-lg font-bold text-foreground">3</div>
                  </div>
                </div>
                {/* Simulated logs */}
                <div className="bg-[#0a0a0a] rounded-xl p-4 font-mono text-[10px] space-y-2 border border-border/50 shadow-inner h-32 overflow-hidden relative">
                   <div className="text-emerald-500">[OK] Firewall rules updated successfully</div>
                   <div className="text-amber-500">[WARN] Multiple failed login attempts detected from IP 192.168.1.105</div>
                   <div className="text-emerald-500">[OK] System backup completed (2.4TB)</div>
                   <div className="text-blue-400">[INFO] Scanning inbound traffic stream...</div>
                   <div className="text-red-500">[ALERT] Malware signature matched on endpoint DESKTOP-4829</div>
                   <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Security Posture Lifecycle</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Continuous assessment and fortification of your digital perimeter.</p>
          </div>
        </Reveal>
        
        <ProcessFlow 
          steps={[
            { step: "01", title: "Assess", desc: "Vulnerability scanning and risk analysis" },
            { step: "02", title: "Harden", desc: "Policy implementation and patching" },
            { step: "03", title: "Monitor", desc: "24/7 SOC and automated threat hunting" },
            { step: "04", title: "Respond", desc: "Incident containment and remediation" }
          ]}
        />
      </section>
    </main>
  );
}
