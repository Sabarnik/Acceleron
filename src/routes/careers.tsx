import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Briefcase, GraduationCap, Users } from "lucide-react";
import { Reveal, WaveDivider } from "../components/ui/Animations";
import { PageHero } from "../components/ui/PageHero";

export const Route = createFileRoute("/careers")({
  component: CareersPage,
});

function CareersPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <PageHero
        title="Join Acceleron Solutions"
        subtitle="Build your career at the intersection of heavy industry and cutting-edge technology."
        breadcrumbs={[{ label: "Careers" }]}
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
        ctaText="View Open Roles"
        ctaHref="#roles"
      />

      <section id="roles" className="section-dark container mx-auto px-6 max-w-7xl relative z-10 py-24">
        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Open Positions</h2>
        <div className="grid gap-6">
          {[
            { title: "Senior SAP S/4HANA Consultant", loc: "Kolkata, India", type: "Full-Time" },
            { title: "Salesforce Technical Lead", loc: "Remote", type: "Full-Time" },
            { title: "Full Stack Developer (React/Node)", loc: "Delhi, India", type: "Full-Time" }
          ].map((job, idx) => (
            <Reveal key={idx} delay={0.1 * idx}>
              <div className="flex flex-col md:flex-row md:items-center justify-between rounded-3xl border border-border/50 bg-background/50 p-8 hover:border-brand/30 transition-all backdrop-blur-xl">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{job.title}</h3>
                  <div className="flex gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><Briefcase className="h-4 w-4"/> {job.type}</span>
                    <span className="flex items-center gap-1"><Users className="h-4 w-4"/> {job.loc}</span>
                  </div>
                </div>
                <button className="mt-4 md:mt-0 rounded-full border border-brand text-brand px-6 py-2 hover:bg-brand hover:text-white transition-colors">Apply Now</button>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
