import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle, ArrowUpRight, Cloud } from "lucide-react";
import { Reveal, WaveDivider } from "../../components/ui/Animations";
import { PageHero } from "../../components/ui/PageHero";
import { ProcessFlow } from "../../components/ui/ProductShowcase";
import { SalesforceLogo } from "../../components/ui/Icons";
import { Link } from "@tanstack/react-router";
import { getSubServicesByCategory } from "../../data/servicesData";

export const Route = createFileRoute("/services/salesforce")({
  component: SalesforcePage,
});

function SalesforcePage() {
  const subServices = getSubServicesByCategory("salesforce");

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <PageHero
        title="Salesforce Services"
        subtitle="Sales, Service, Marketing, and Data Cloud — CRM engineered around your customer journey."
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Salesforce" }]}
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
        icon={<div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-glow p-2"><SalesforceLogo className="h-10 w-10" /></div>}
      />

      <section className="container mx-auto px-6 max-w-7xl relative z-10 py-24">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Salesforce Capabilities</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Full-stack Salesforce expertise from migration to managed services across the entire cloud ecosystem.</p>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subServices.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.08}>
              <Link to={`/services/${s.categorySlug}/${s.slug}` as any} className="block h-full group">
                <div className="rounded-2xl border border-border bg-card p-8 h-full transition-all hover:border-brand/30 hover:shadow-soft flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-brand-red shrink-0 mt-0.5" />
                        <h3 className="text-lg font-bold text-foreground group-hover:text-brand transition-colors">{s.title}</h3>
                      </div>
                      <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-brand group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-sm">{s.desc}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border/50 flex items-center text-xs font-bold text-brand">
                    Explore Detail & Pricing →
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <WaveDivider from="white" to="dark" />

      <section className="section-dark container mx-auto px-6 max-w-7xl relative z-10 py-24">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">CRM Transformation Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">A structured approach to maximizing your Salesforce ROI.</p>
          </div>
        </Reveal>
        <ProcessFlow
          steps={[
            { step: "01", title: "Assess", desc: "Current state analysis and roadmap" },
            { step: "02", title: "Architect", desc: "Solution design and data model" },
            { step: "03", title: "Implement", desc: "Configuration, customization, and integration" },
            { step: "04", title: "Adopt", desc: "Training, go-live, and continuous optimization" },
          ]}
        />
      </section>

      <WaveDivider from="dark" to="white" />

      <section className="container mx-auto px-6 max-w-7xl relative z-10 py-24 text-center">
        <Reveal>
          <h2 className="text-3xl font-bold text-foreground mb-6">Transform Your CRM</h2>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-8 py-4 text-base font-bold text-white shadow-glow transition-all hover:scale-105">
            Talk to Our Salesforce Team <ArrowUpRight className="h-5 w-5" />
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
