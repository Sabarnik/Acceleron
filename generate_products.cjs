const fs = require('fs');

const createProductPage = (name, route, headline, subhead, problem, solution, features, aiFeatures, impact, icon, gradient) => {
  const content = `import { createFileRoute } from "@tanstack/react-router";
import { Reveal, WaveDivider } from "../../components/ui/Animations";
import { ArrowUpRight, ${icon}, CheckCircle2, Sparkles } from "lucide-react";

export const Route = createFileRoute("/products/${route}")({
  component: ProductPage,
});

function ProductPage() {
  return (
    <main className="relative min-h-screen pt-32 pb-24 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,oklch(0.62_0.22_260/0.1),transparent_50%)]" />
      
      {/* Hero Section */}
      <section className="container mx-auto px-6 max-w-7xl relative z-10 mb-32">
        <Reveal>
          <div className="flex flex-col items-start max-w-4xl">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} text-white shadow-glow">
              <${icon} className="h-8 w-8" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gradient mb-6">
              ${headline}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-10">
              ${subhead}
            </p>
            <a href="/contact" className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-8 py-4 text-base font-bold text-white shadow-glow transition-all hover:scale-105 hover:bg-brand/90">
              Request a Demo <ArrowUpRight className="h-5 w-5" />
            </a>
          </div>
        </Reveal>
      </section>

      <WaveDivider />

      {/* Problem & Solution */}
      <section className="container mx-auto px-6 max-w-7xl relative z-10 py-24">
        <div className="grid lg:grid-cols-2 gap-16">
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-border/50 bg-muted/20 p-10 h-full">
              <h2 className="text-2xl font-bold text-foreground mb-4">The Problem</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">${problem}</p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="rounded-3xl border border-brand/30 bg-brand/5 p-10 h-full shadow-glow">
              <h2 className="text-2xl font-bold text-brand mb-4">The Solution</h2>
              <p className="text-foreground leading-relaxed text-lg">${solution}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <WaveDivider />

      {/* Key Features & AI */}
      <section className="container mx-auto px-6 max-w-7xl relative z-10 py-24">
        <div className="grid lg:grid-cols-2 gap-16">
          <Reveal>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Key Features</h2>
              <div className="space-y-6">
                {${JSON.stringify(features)}.map((f, i) => (
                  <div key={i} className="flex gap-4">
                    <CheckCircle2 className="h-6 w-6 text-brand shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-1">{f.title}</h4>
                      <p className="text-muted-foreground">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
                <Sparkles className="h-8 w-8 text-amber-500" />
                AI Intelligence Features
              </h2>
              <div className="space-y-6">
                {${JSON.stringify(aiFeatures)}.map((f, i) => (
                  <div key={i} className="flex gap-4 p-6 rounded-2xl border border-amber-500/20 bg-amber-500/5">
                    <Sparkles className="h-6 w-6 text-amber-500 shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-1">{f.title}</h4>
                      <p className="text-muted-foreground">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      ${impact ? `
      <WaveDivider />
      <section className="container mx-auto px-6 max-w-7xl relative z-10 py-24 text-center">
        <Reveal>
          <div className="max-w-3xl mx-auto rounded-3xl border border-brand/30 bg-brand-gradient p-12 text-white shadow-glow">
            <h2 className="text-2xl font-bold mb-4 opacity-90">Proven Impact</h2>
            <p className="text-2xl md:text-4xl font-black leading-tight">
              "${impact}"
            </p>
          </div>
        </Reveal>
      </section>
      ` : ''}
    </main>
  );
}
`;
  fs.writeFileSync(`src/routes/products/${route}.tsx`, content);
}

// Suraksha
createProductPage(
  "Suraksha", "suraksha",
  "Reducing Incident Response Time by 60%",
  "A centralized, PWA-based safety management platform built for real-time observation, automated CAPA management, and proactive safety compliance in hazardous mining and industrial environments.",
  "Traditional safety reporting relies on manual logging and disjointed follow-ups. Near-misses go undocumented, and compliance tracking for regulatory bodies (like the DGMS) is fragmented and reactive.",
  "A centralized digital platform that streams real-time incident reporting, automates corrective action (CAPA) tracking, and provides immediate visibility into site-wide risk profiles.",
  [
    { title: "Real-Time Incident Reporting & SOS", desc: "Instant alerts sent directly to supervisors from the field with image-based evidence capture." },
    { title: "Automated Risk Indexing", desc: "Uses a standardized 5x5 matrix for objective prioritization of safety hazards." },
    { title: "Geo-Location Tracking", desc: "Real-time tracking and geofencing to protect lone workers and coordinate incident response teams." }
  ],
  [
    { title: "AI Risk Scoring", desc: "Automatically scores incident severity based on historical and contextual data patterns." },
    { title: "Predictive Hazard Detection", desc: "Identifies high-risk zones and potential safety bottlenecks by scanning near-miss trends." },
    { title: "NLP Incident Classification", desc: "Automatically categorizes and routes safety reports from free-text descriptions." }
  ],
  "60% reduction in incident response times and an 85% increase in safety reporting compliance within 90 days of deployment.",
  "ShieldCheck", "from-teal-500 to-cyan-600"
);

// Tyre Health Management
createProductPage(
  "Tyre Health Management", "tyre-health",
  "Optimizing Fleet Run-Times and Slashing Premature Wear",
  "Complete tyre lifecycle tracking from purchase to deployment, designed to eliminate unexpected breakdowns and reduce operational fleet costs.",
  "Tyres represent one of the highest operating expenses for heavy machinery. Without structured tracking of Service Unit Hours (SMU), rotation history, and repair status, premature tyre failure and unscheduled vehicle downtime run rampantly.",
  "An end-to-end visual inventory and tracking engine that logs the precise status of every tyre across its journey, signaling maintenance actions before failures occur.",
  [
    { title: "Comprehensive Tyre Log History", desc: "Granular SMU and repair history logged continuously from deployment to scrap." },
    { title: "Visual Equipment Dashboard", desc: "Graphical representations of machinery with interactive tyre position visualization." },
    { title: "Inventory & Master Data Management", desc: "Secure, role-based site configurations and complete technical specifications tracked in a centralized model repository." }
  ],
  [
    { title: "Predictive Wear Analytics", desc: "Forecasts remaining tyre life using historical SMU, terrain, temperature, and load indicators." },
    { title: "Anomaly Detection", desc: "Flag abnormal pressure, temperature, or structural behavior in real time." },
    { title: "AI Replacement Scheduling", desc: "Recommends optimal rotation and replacement cycles to maximize tyre utility." }
  ],
  "", "Wrench", "from-blue-500 to-indigo-600"
);

// QMS
createProductPage(
  "QMS", "qms",
  "Automated Inspections and Component Tracking for Modern Workshops",
  "Drive workshop efficiency, maintain regulatory compliance, and eliminate quality non-conformances with an SAP-integrated floor management engine.",
  "Paper-based checklists and siloed spreadsheets result in delayed quality audits, untracked assembly defects, and extended repair cycles that ultimately erode customer trust.",
  "A unified digital QMS that provides workshop floor control, end-to-end component visibility, and real-time KPI tracking.",
  [
    { title: "End-to-End Component Tracking", desc: "Follow critical parts through every stage of receiving, inspection, assembly, and dispatch." },
    { title: "Smart Floor Dashboard", desc: "Dynamic shop-floor screens display live technician hours, shift management, and part allocations." },
    { title: "Role-Based Security & ERP Integration", desc: "Integrates directly into corporate ERPs while keeping floor actions secure." }
  ],
  [
    { title: "AI Defect Detection", desc: "Identifies structural and surface anomalies automatically from inspection photographs." },
    { title: "Smart KPI Forecasting", desc: "Predicts downstream quality bottlenecks by evaluating historical production metrics." },
    { title: "Root Cause Recommendation", desc: "Matches current defects to historical repair logs to instantly suggest probable root causes." }
  ],
  "", "Layers", "from-fuchsia-500 to-violet-600"
);

// CWMS
createProductPage(
  "CWMS", "cwms",
  "Biometric-Driven Workforce Oversight and Allocation",
  "Automate contractor registration, eliminate compliance risks, and track shift attendance with seamless on-site biometric and facial recognition.",
  "Large industrial operations suffer from manual attendance leaks, compliance penalties, inaccurate payroll processing, and inefficient workforce-to-skill matching.",
  "An enterprise contractor management system that validates attendance in real time and automatically enforces budgetary constraints.",
  [
    { title: "Biometric & Facial Integration", desc: "Real-time, localized site attendance checking with manual override fallbacks." },
    { title: "Requisition & Allocation Validation", desc: "Hard rules dynamically prevent contractor over-allocation, ensuring strict adherence to site budgets." },
    { title: "Multi-Level Approval Engine", desc: "Easily configure automated requisition routing across HOD, HR, and external agency heads." }
  ],
  [
    { title: "AI Skill Matching", desc: "Instantly recommends the most qualified contractors for incoming site tasks based on historical performance." },
    { title: "Attendance Anomaly Detection", desc: "Automatically flags suspicious GPS patterns or mismatching biometric inputs." },
    { title: "Predictive Compliance Alerts", desc: "Dynamically monitors expiration dates on contractor documentation to alert managers of impending non-compliance risks." }
  ],
  "", "Boxes", "from-cyan-500 to-blue-600"
);

// Supplier Portal
createProductPage(
  "Supplier Portal Management", "supplier-portal",
  "Streamlined Vendor Onboarding and SAP-Integrated Procurement",
  "Eliminate manual processing delays and optimize supply chains by automating POs, invoices, ASNs, and compliance tracking.",
  "Slow vendor onboarding, manual document verification, mismatched invoices, and poor visibility into shipping schedules strain supplier relationships and disrupt production.",
  "A unified portal that connects suppliers directly to your SAP core, introducing automated workflows from registration to payment.",
  [
    { title: "Bidirectional SAP Sync", desc: "Instantly exchange purchase order and invoicing data between the portal and your corporate ERP." },
    { title: "Advanced Shipping Notice (ASN) & Logistics", desc: "Tracks supplier shipment schedules and transit details directly." },
    { title: "Secure Invoice Processing", desc: "Complete digital invoice routing, matching, and payment status updates." }
  ],
  [
    { title: "AI Invoice Validation", desc: "Automatically reconciles and matches incoming supplier invoices against corresponding POs and ASNs." },
    { title: "Supplier Risk Scoring", desc: "Evaluates supplier risk profiles continuously by analyzing delivery delays, quality issues, and compliance gaps." },
    { title: "Smart Onboarding Assistant", desc: "Validates corporate documentation, tax details, and compliance certifications automatically during vendor setup." }
  ],
  "", "ShoppingBag", "from-violet-500 to-purple-600"
);

// PJP
createProductPage(
  "Pre Journey Plan (PJP)", "pjp",
  "Field Force Route Optimization and Fraud Prevention",
  "Plan optimized visit routes, monitor field sales activities with geo-fenced verify check-ins, and secure your marketing budgets.",
  "Sales reps lose hours planning travel schedules, while managers suffer from manual mileage reporting fraud, poor dealer coverage, and a lack of real-time market visibility.",
  "A centralized field tracking app that automatically maps efficient routes and verifies dealer visits.",
  [
    { title: "Verify Visit Check-Ins", desc: "GPS tracking combined with strict geo-fenced checks prevents fake visit reporting." },
    { title: "Dynamic Exception Handling", desc: "On-ground agents can instantly reschedule visits and request real-time approvals from managers." },
    { title: "Performance Dashboards", desc: "Gives managers immediate analytical visibility into coverage, target achievements, and rep productivity." }
  ],
  [
    { title: "AI-Powered Smart PJP Creation", desc: "Automatically structures weekly visit calendars by cross-referencing dealer values and sales targets." },
    { title: "AI Route Optimization", desc: "Recommends the absolute fastest route choices based on active traffic patterns, priorities, and schedules." },
    { title: "AI Expense & Fraud Control", desc: "Cross-references actual GPS distance covered with logged expense claims to flag anomalies automatically." }
  ],
  "", "TrendingUp", "from-indigo-500 to-blue-600"
);

console.log("Product pages generated");
