import { createFileRoute } from "@tanstack/react-router";
import { Reveal, WaveDivider } from "../../components/ui/Animations";
import { ArrowUpRight, HardHat, CheckCircle } from "lucide-react";
import { PageHero } from "../../components/ui/PageHero";

export const Route = createFileRoute("/industries/mining")({
  component: IndustryPage,
});

function IndustryPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <PageHero
        title="Mining Doesn't Pause for IT Downtime. Neither Do We."
        subtitle="We bring real operational domain experience to mine sites—grounded in our legacy within the Gainwell Group, delivering high-performance SAP, Salesforce, and Teamcenter implementations."
        breadcrumbs={[{ label: "Industries", href: "/industries" }, { label: "Mining" }]}
        image="https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?q=80&w=1974&auto=format&fit=crop"
        icon={<div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-glow"><HardHat className="h-8 w-8" /></div>}
        ctaText="Talk to Our Mining Experts"
      />

      {/* The Challenges & How We Help */}
      <section className="section-dark container mx-auto px-6 max-w-7xl relative z-10 py-24">
        <div className="grid lg:grid-cols-2 gap-16">
          <Reveal delay={0.1}>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">The Challenges We Solve</h2>
              <p className="text-muted-foreground leading-relaxed text-lg border-l-4 border-brand/50 pl-6 py-2 bg-muted/10 rounded-r-2xl">
                Mining companies operate under extreme regulatory scrutiny, in remote geographies, with heavy machinery that represents enormous capital investments. Siloed systems create dangerous blind spots—separating production schedules from equipment maintenance and on-site workforce safety.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">How We Help</h2>
              <div className="space-y-6">
                {[{"title":"Integrated Mine ERP (SAP S/4HANA)","desc":"Optimize resource allocation, production scheduling, asset maintenance, and inventory tracking within a unified system."},{"title":"Stakeholder Trust (Salesforce)","desc":"Manage community relationships, landowner agreements, environmental data, and commercial sales processes."},{"title":"Engineering Lifecycle (Teamcenter)","desc":"Establish a single source of truth for engineering documentation, equipment manuals, and infrastructure layouts."},{"title":"Connected Field Safety (Suraksha App)","desc":"Equip workers with real-time incident logging and GPS-enabled SOS capabilities, reducing response times by up to 60%."}].map((s, i) => (
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
