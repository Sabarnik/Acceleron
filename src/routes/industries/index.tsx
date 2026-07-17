import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, HardHat, Factory, Zap } from "lucide-react";
import { Reveal, WaveDivider } from "../../components/ui/Animations";
import { PageHero } from "../../components/ui/PageHero";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/industries/")({
  component: IndustriesHub,
});

function IndustriesHub() {
  const INDUSTRIES = [
    {
      name: "Mining",
      desc: "Optimizing production scheduling, equipment maintenance, and field safety.",
      url: "/industries/mining",
      icon: HardHat,
      image: "https://images.unsplash.com/photo-1578508493188-f54f738b584d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Discrete Manufacturing",
      desc: "Connecting production floors, reducing cycle times, and minimizing downtime.",
      url: "/industries/discrete-manufacturing",
      icon: Factory,
      image: "https://images.unsplash.com/photo-1565158145899-79f90f10c663?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Utilities",
      desc: "Managing complex infrastructure, asset lifecycles, and billing operations.",
      url: "/industries/utilities",
      icon: Zap,
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <PageHero
        title="We Build for the Physical World"
        subtitle="Our solutions are forged in the reality of mines, manufacturing floors, and utility grids—where software bugs don't just cause downtime, they stop production."
        breadcrumbs={[{ label: "Industries" }]}
        image="https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?q=80&w=2071&auto=format&fit=crop"
        ctaText="See Our Work"
      />

      {/* Industries Grid */}
      <section className="container mx-auto px-6 max-w-7xl relative z-10 py-24">
        <div className="grid md:grid-cols-3 gap-8">
          {INDUSTRIES.map((ind, idx) => (
            <Reveal key={ind.name} delay={0.1 * idx}>
              <Link to={ind.url as any} className="block group rounded-3xl overflow-hidden border border-border/50 bg-background/50 hover:border-brand/30 transition-all hover:shadow-soft hover:-translate-y-1 h-full flex flex-col">
                <div className="relative h-48 w-full overflow-hidden">
                  <img src={ind.image} alt={ind.name} className="object-cover w-full h-full opacity-80 group-hover:scale-105 transition-transform duration-700 mix-blend-luminosity hover:mix-blend-normal" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                  <div className="absolute bottom-4 left-6 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-glow">
                    <ind.icon className="h-6 w-6" />
                  </div>
                </div>
                <div className="p-8 pt-4 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-brand transition-colors">{ind.name}</h3>
                  <p className="text-muted-foreground mb-8 flex-1">
                    {ind.desc}
                  </p>
                  <div className="flex items-center text-sm font-semibold text-brand mt-auto">
                    View Sector Solutions <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
