const fs = require('fs');

const createIndustryPage = (name, route, headline, subhead, challenges, solutions, icon) => {
  const content = `import { createFileRoute } from "@tanstack/react-router";
import { Reveal, WaveDivider } from "../../components/ui/Animations";
import { ArrowUpRight, ${icon}, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/industries/${route}")({
  component: IndustryPage,
});

function IndustryPage() {
  return (
    <main className="relative min-h-screen pt-32 pb-24 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,oklch(0.62_0.22_260/0.1),transparent_50%)]" />
      
      {/* Hero Section */}
      <section className="container mx-auto px-6 max-w-7xl relative z-10 mb-32">
        <Reveal>
          <div className="flex flex-col items-start max-w-4xl">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-glow">
              <${icon} className="h-8 w-8" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gradient mb-6">
              ${headline}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-10">
              ${subhead}
            </p>
            <a href="/contact" className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-8 py-4 text-base font-bold text-white shadow-glow transition-all hover:scale-105 hover:bg-brand/90">
              Talk to Our ${name} Experts <ArrowUpRight className="h-5 w-5" />
            </a>
          </div>
        </Reveal>
      </section>

      <WaveDivider />

      {/* The Challenges & How We Help */}
      <section className="container mx-auto px-6 max-w-7xl relative z-10 py-24">
        <div className="grid lg:grid-cols-2 gap-16">
          <Reveal delay={0.1}>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">The Challenges We Solve</h2>
              <p className="text-muted-foreground leading-relaxed text-lg border-l-4 border-brand/50 pl-6 py-2 bg-muted/10 rounded-r-2xl">
                ${challenges}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">How We Help</h2>
              <div className="space-y-6">
                {${JSON.stringify(solutions)}.map((s, i) => (
                  <div key={i} className="flex gap-4 p-6 rounded-2xl border border-border/50 bg-background/50 backdrop-blur-xl">
                    <CheckCircle2 className="h-6 w-6 text-brand shrink-0 mt-1" />
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
`;
  fs.writeFileSync(`src/routes/industries/${route}.tsx`, content);
}

// Mining
createIndustryPage(
  "Mining", "mining",
  "Mining Doesn't Pause for IT Downtime. Neither Do We.",
  "We bring real operational domain experience to mine sites—grounded in our legacy within the Gainwell Group, delivering high-performance SAP, Salesforce, and Teamcenter implementations.",
  "Mining companies operate under extreme regulatory scrutiny, in remote geographies, with heavy machinery that represents enormous capital investments. Siloed systems create dangerous blind spots—separating production schedules from equipment maintenance and on-site workforce safety.",
  [
    { title: "Integrated Mine ERP (SAP S/4HANA)", desc: "Optimize resource allocation, production scheduling, asset maintenance, and inventory tracking within a unified system." },
    { title: "Stakeholder Trust (Salesforce)", desc: "Manage community relationships, landowner agreements, environmental data, and commercial sales processes." },
    { title: "Engineering Lifecycle (Teamcenter)", desc: "Establish a single source of truth for engineering documentation, equipment manuals, and infrastructure layouts." },
    { title: "Connected Field Safety (Suraksha App)", desc: "Equip workers with real-time incident logging and GPS-enabled SOS capabilities, reducing response times by up to 60%." }
  ],
  "HardHat"
);

// Discrete Manufacturing
createIndustryPage(
  "Discrete Manufacturing", "discrete-manufacturing",
  "Manufacturing Efficiency Isn't a One-Time Project. It's a System.",
  "We help discrete manufacturers reduce cycle times, control scrap rates, and eliminate unplanned downtime with SAP, IoT analytics, and Digital Twin solutions.",
  "Discrete manufacturers face volatile supply chains, strict compliance demands, and thin operating margins. Unplanned equipment failures disrupt delivery schedules, while paper-based floor audits make quality control slow and reactive.",
  [
    { title: "Smart Manufacturing (SAP Digital Supply Chain)", desc: "Connect production floor schedules directly to material requirements and customer billing." },
    { title: "CAD/CAM & PLM Integration", desc: "Bridging the gap between engineering design teams and production lines to ensure product data consistency." },
    { title: "IoT & Predictive Maintenance (D3S)", desc: "Stream machine data dynamically to forecast equipment failures before they trigger an line stoppage." },
    { title: "Digital Twin Solutions", desc: "Model virtual assets and physical workflows to test floor changes safely before investing capital." }
  ],
  "Factory"
);

// Utilities
createIndustryPage(
  "Utilities", "utilities",
  "Reliable Utilities Demand Resilient Systems",
  "Connect your field workforce, simplify billing operations, and improve grid reliability with SAP and Salesforce solutions built for public and private utility providers.",
  "Utility companies manage sprawling, capital-intensive infrastructure while dealing with high volumes of billing inquiries, regulatory compliance audits, and critical outage management protocols.",
  [
    { title: "Grid and Asset Lifecycle Management (SAP PM)", desc: "Track health indicators across complex transmission and distribution networks to plan preventative maintenance." },
    { title: "Customer Billing & Relations (Salesforce Service Cloud)", desc: "Standardize outage communications and customer billing inquiries across multiple digital channels." },
    { title: "Field Force Dispatching", desc: "Automatically schedule utility technicians to repair locations using optimized routes and live GPS data." }
  ],
  "Zap"
);

console.log("Industry pages generated");
