import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Cloud, Code2, ShieldCheck, Cpu } from "lucide-react";
import { Reveal, WaveDivider } from "../../components/ui/Animations";
import { PageHero } from "../../components/ui/PageHero";
import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/services/")({
  component: ServicesHub,
});

function ServicesHub() {
  const SERVICES = [
    {
      title: "Enterprise Application Services (EAS)",
      desc: "Enterprise-grade SAP, Salesforce, and Zoho consulting, implementation, and managed services built on decades of hands-on delivery experience.",
      icon: Cloud,
      url: "/services/eas",
      points: [
        "SAP S/4HANA & RISE with SAP: Greenfield deployments, cloud migrations.",
        "Salesforce Cloud Ecosystem: CPQ, Sales Cloud, Service Cloud, and Lightning.",
        "Zoho Suite: Zoho Books, Zoho People (HRMS), and Zoho CRM optimized."
      ]
    },
    {
      title: "Software Development as a Service (SDaaS)",
      desc: "Custom web, mobile, and enterprise software built using modern tech stacks and AI-assisted code generation to reduce development cycles.",
      icon: Code2,
      url: "/services/sdaas",
      points: [
        "Full Stack Development: Specialized teams in React, Next.js, Node.js, Python.",
        "Mobile Apps: Native and cross-platform builds (Swift, Kotlin, Flutter).",
        "Modernization: Migrating and updating legacy systems to secure architectures."
      ]
    },
    {
      title: "Digital, Data & Decision Services (D3S)",
      desc: "Transforming connected physical assets into actionable intelligence and automated operational outcomes.",
      icon: Cpu,
      url: "/services/d3s",
      points: [
        "Connected Assets: Machine and equipment intelligence using advanced IoT pipelines.",
        "Mining & Industrial Solutions: Deep learning algorithms deployed for operational optimization.",
        "Operational Dashboards: Real-time asset health monitoring and performance visualization."
      ]
    },
    {
      title: "Cloud, Infrastructure & Security Services (CISS)",
      desc: "The proactive operational backbone that keeps your enterprise protected and running smoothly 24/7.",
      icon: ShieldCheck,
      url: "/services/ciss",
      points: [
        "Multi-Cloud Managed Services: Infrastructure design and continuous optimization.",
        "Zero-Trust Cybersecurity: ISO 27001 readiness, automated threat detection, VAPT.",
        "Email & Collaboration Setup: Managed support for Microsoft 365, Google Workspace."
      ]
    }
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <PageHero
        title="One Technology Partner. Every Layer of Your Stack."
        subtitle="From SAP transformation to cybersecurity, we help enterprise and industrial businesses simplify their technology instead of adding to the pile."
        breadcrumbs={[{ label: "Services" }]}
        image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
      />

      {/* Services Grid */}
      <section className="container mx-auto px-6 max-w-7xl relative z-10 py-24">
        <div className="grid lg:grid-cols-2 gap-8">
          {SERVICES.map((srv, idx) => (
            <Reveal key={srv.title} delay={0.1 * idx}>
              <Link to={srv.url as any} className="block h-full">
                <motion.div
                  whileHover={{ y: -4 }}
                  className="rounded-3xl border border-border/50 bg-background/50 p-10 hover:border-brand/30 transition-all hover:shadow-soft group backdrop-blur-xl h-full flex flex-col"
                >
                  <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-glow group-hover:scale-110 transition-transform">
                    <srv.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-4 group-hover:text-brand transition-colors">{srv.title}</h3>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {srv.desc}
                  </p>
                  <ul className="space-y-4 mb-8 flex-1">
                    {srv.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="mt-2 h-2 w-2 rounded-full bg-brand shrink-0" />
                        <p className="text-muted-foreground">{pt}</p>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex items-center text-sm font-semibold text-brand">
                    Explore Service <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </motion.div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
