import { createFileRoute } from "@tanstack/react-router";
import { Code2, CheckCircle } from "lucide-react";
import { Reveal, WaveDivider } from "../../components/ui/Animations";
import { PageHero } from "../../components/ui/PageHero";
import { UIMockup, ProcessFlow } from "../../components/ui/ProductShowcase";

export const Route = createFileRoute("/services/sdaas")({
  component: SDaaSPage,
});

function SDaaSPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <PageHero
        title="Software Development as a Service (SDaaS)"
        subtitle="Custom web, mobile, and enterprise software built using modern tech stacks and AI-assisted code generation to reduce development cycles."
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "SDaaS" }]}
        image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
        icon={<div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-glow"><Code2 className="h-8 w-8" /></div>}
      />

      <section className="section-dark container mx-auto px-6 max-w-7xl relative z-10 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Build Faster, Scale Better</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We design, build, and maintain custom applications that solve unique business problems where off-the-shelf software falls short.
              </p>
              <div className="space-y-4">
                {[
                  "Full Stack Web Development (React, Next.js, Node.js, Django).",
                  "Cross-Platform Mobile Apps (Flutter, React Native).",
                  "API Development & Microservices Architecture.",
                  "Legacy System Modernization & Cloud Migration."
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
            <UIMockup title="Agile Sprint Board">
              <div className="space-y-4">
                {/* Simulated Kanban Columns */}
                <div className="grid grid-cols-3 gap-4 h-64">
                  <div className="bg-muted/30 rounded-xl p-3 border border-border/50">
                    <div className="text-xs font-bold uppercase tracking-wider mb-3 text-foreground/50">To Do</div>
                    <div className="bg-background rounded-lg p-3 text-sm shadow-sm border border-border mb-2">Setup CI/CD pipeline</div>
                    <div className="bg-background rounded-lg p-3 text-sm shadow-sm border border-border">Implement Auth</div>
                  </div>
                  <div className="bg-muted/30 rounded-xl p-3 border border-border/50">
                    <div className="text-xs font-bold uppercase tracking-wider mb-3 text-foreground/50">In Progress</div>
                    <div className="bg-background rounded-lg p-3 text-sm shadow-sm border border-brand border-l-4">Build API endpoints</div>
                  </div>
                  <div className="bg-muted/30 rounded-xl p-3 border border-border/50">
                    <div className="text-xs font-bold uppercase tracking-wider mb-3 text-foreground/50">Done</div>
                    <div className="bg-background rounded-lg p-3 text-sm shadow-sm border border-border mb-2 line-through text-muted-foreground">Database schema</div>
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Development Lifecycle</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">We follow a modern agile approach to deliver high-quality software predictably.</p>
          </div>
        </Reveal>
        
        <ProcessFlow 
          steps={[
            { step: "01", title: "Requirements", desc: "User stories and technical specification" },
            { step: "02", title: "Prototyping", desc: "UI/UX wireframes and architecture" },
            { step: "03", title: "Development", desc: "Sprints, code review, and QA" },
            { step: "04", title: "Maintenance", desc: "Monitoring, scaling, and support" }
          ]}
        />
      </section>
    </main>
  );
}
