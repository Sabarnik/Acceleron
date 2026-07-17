const fs = require('fs');

const careersContent = `import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Briefcase, GraduationCap, Users } from "lucide-react";
import { Reveal, WaveDivider } from "../components/ui/Animations";

export const Route = createFileRoute("/careers")({
  component: CareersPage,
});

function CareersPage() {
  return (
    <main className="relative min-h-screen pt-32 pb-24 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,oklch(0.62_0.22_260/0.1),transparent_50%)]" />
      
      <section className="container mx-auto px-6 max-w-7xl relative z-10 mb-32">
        <Reveal>
          <div className="max-w-4xl text-center mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gradient mb-6">
              Join Acceleron Solutions
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-10">
              Build your career at the intersection of heavy industry and cutting-edge technology.
            </p>
            <a href="#roles" className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-8 py-4 text-base font-bold text-white shadow-glow transition-all hover:scale-105 hover:bg-brand/90">
              View Open Roles <ArrowUpRight className="h-5 w-5" />
            </a>
          </div>
        </Reveal>
      </section>

      <WaveDivider />

      <section id="roles" className="container mx-auto px-6 max-w-7xl relative z-10 py-24">
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
`;

const contactContent = `import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { Reveal, WaveDivider } from "../components/ui/Animations";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="relative min-h-screen pt-32 pb-24 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,oklch(0.62_0.22_260/0.1),transparent_50%)]" />
      
      <section className="container mx-auto px-6 max-w-7xl relative z-10 mb-32">
        <Reveal>
          <div className="max-w-4xl text-center mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gradient mb-6">
              Let's Talk
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-10">
              Ready to modernize your operations? Our experts are here to help.
            </p>
          </div>
        </Reveal>
      </section>

      <WaveDivider />

      <section className="container mx-auto px-6 max-w-7xl relative z-10 py-24">
        <div className="grid md:grid-cols-2 gap-16">
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-border/50 bg-background/50 p-10 backdrop-blur-xl h-full">
              <h2 className="text-2xl font-bold text-foreground mb-8">Send us a message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">Name</label>
                  <input type="text" className="w-full rounded-xl border border-border bg-background p-3 text-foreground focus:outline-none focus:ring-2 focus:ring-brand/50" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">Email</label>
                  <input type="email" className="w-full rounded-xl border border-border bg-background p-3 text-foreground focus:outline-none focus:ring-2 focus:ring-brand/50" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">Message</label>
                  <textarea rows={4} className="w-full rounded-xl border border-border bg-background p-3 text-foreground focus:outline-none focus:ring-2 focus:ring-brand/50" />
                </div>
                <button type="button" className="w-full rounded-xl bg-brand-gradient py-4 text-white font-bold shadow-glow hover:scale-[1.02] transition-transform">Send Message</button>
              </form>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Global Delivery Centers</h2>
                <div className="space-y-6">
                  {[
                    "Kolkata, India",
                    "Delhi, India",
                    "West Virginia, USA",
                    "New South Wales, Australia",
                    "Singapore"
                  ].map((loc, i) => (
                    <div key={i} className="flex items-center gap-4 text-muted-foreground">
                      <MapPin className="h-5 w-5 text-brand" /> <span>{loc}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Direct Contact</h2>
                <div className="space-y-4 text-muted-foreground">
                  <div className="flex items-center gap-4"><Mail className="h-5 w-5 text-brand"/> contact@acceleronsolutions.com</div>
                  <div className="flex items-center gap-4"><Phone className="h-5 w-5 text-brand"/> +91 33 2345 6789</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
`;

const teamContent = `import { createFileRoute } from "@tanstack/react-router";
import { Linkedin } from "lucide-react";
import { Reveal, WaveDivider } from "../components/ui/Animations";

export const Route = createFileRoute("/team")({
  component: TeamPage,
});

function TeamPage() {
  return (
    <main className="relative min-h-screen pt-32 pb-24 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,oklch(0.62_0.22_260/0.1),transparent_50%)]" />
      
      <section className="container mx-auto px-6 max-w-7xl relative z-10 mb-32">
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

      <WaveDivider />

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
`;

fs.writeFileSync('src/routes/careers.tsx', careersContent);
fs.writeFileSync('src/routes/contact.tsx', contactContent);
fs.writeFileSync('src/routes/team.tsx', teamContent);
console.log("Extras generated");
