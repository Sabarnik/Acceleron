import { createFileRoute } from "@tanstack/react-router";
import { Linkedin } from "lucide-react";
import { Reveal, WaveDivider } from "../components/ui/Animations";

export const Route = createFileRoute("/team")({
  component: TeamPage,
});

function TeamPage() {
  return (
    <main className="relative min-h-screen pt-32 pb-24 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,oklch(0.62_0.22_260/0.1),transparent_50%)]" />
      
      <section className="section-dark container mx-auto px-6 max-w-7xl relative z-10 mb-32">
        <Reveal>
          <div className="max-w-4xl text-center mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gradient mb-6">
              Leadership Team
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-10">
              Guided by veterans of heavy industry and enterprise technology.
            </p>
          </div>
        </Reveal>
      </section>

      <WaveDivider from="dark" to="white" />

      <section className="container mx-auto px-6 max-w-7xl relative z-10 py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "Executive 1", role: "Chief Executive Officer" },
            { name: "Executive 2", role: "Chief Technology Officer" },
            { name: "Executive 3", role: "Head of SAP Delivery" }
          ].map((member, idx) => (
            <Reveal key={idx} delay={0.1 * idx}>
              <div className="rounded-3xl border border-border/50 bg-background/50 overflow-hidden backdrop-blur-xl group">
                <div className="aspect-[4/5] bg-muted relative overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop" className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500" alt={member.name} />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                </div>
                <div className="p-6 relative -mt-16">
                  <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                  <p className="text-brand font-medium mb-4">{member.role}</p>
                  <a href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-brand hover:text-white transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
