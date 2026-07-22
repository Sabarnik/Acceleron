import { Link } from "@tanstack/react-router";
import { type ReactNode } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, CheckCircle2, ShieldCheck, Zap, Award, ArrowRight } from "lucide-react";
import { Reveal, WaveDivider } from "./Animations";
import { PageHero } from "./PageHero";
import { type IndustryDetail } from "../../data/industriesData";

type IndustryTemplateProps = {
  data: IndustryDetail;
  icon: ReactNode;
};

export function IndustryTemplate({ data, icon }: IndustryTemplateProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <PageHero
        title={data.title}
        subtitle={data.subtitle}
        breadcrumbs={[
          { label: "Industries", href: "/industries" },
          { label: data.slug.replace(/-/g, " ") }
        ]}
        image={data.image}
        icon={
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-glow">
            {icon}
          </div>
        }
        ctaText="Speak with Industry Practice Lead"
        ctaHref="/contact"
      />

      {/* Section 1: Overview & Challenges */}
      <section className="section-dark container mx-auto px-6 max-w-7xl relative z-10 py-24">
        <Reveal>
          <div className="max-w-3xl mb-16">
            <div className="text-xs uppercase tracking-[0.4em] text-brand-red font-bold mb-3">Industry Overview</div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Navigating Modern <span className="text-gradient">Operational Realities</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {data.overview}
            </p>
          </div>
        </Reveal>

        {/* Challenges Grid */}
        <div className="mb-20">
          <Reveal delay={0.1}>
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-brand-red" />
              Core Industry Challenges We Solve
            </h3>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            {data.challenges.map((c, i) => (
              <Reveal key={c.title} delay={0.1 * i}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="rounded-3xl border border-border/60 bg-muted/20 p-8 backdrop-blur-xl hover:border-brand/40 transition-all h-full"
                >
                  <div className="text-xs font-bold text-brand-red uppercase tracking-wider mb-2">Challenge 0{i + 1}</div>
                  <h4 className="text-xl font-bold text-foreground mb-3">{c.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider from="dark" to="white" />

      {/* Section 2: Acceleron Solutions */}
      <section className="container mx-auto px-6 max-w-7xl relative z-10 py-24">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs uppercase tracking-[0.4em] text-brand-red font-bold mb-3">Tailored Architecture</div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Acceleron Solutions & <span className="text-gradient">Capabilities</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Enterprise platforms, custom applications, and domain-specific tools engineered to deliver measurable operational outcomes.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          {data.solutions.map((s, idx) => (
            <Reveal key={s.title} delay={idx * 0.1}>
              <div className="group rounded-3xl border border-border/60 bg-muted/20 p-8 hover:bg-muted/40 hover:border-brand/40 transition-all duration-300 shadow-soft hover:shadow-glow flex items-start gap-5">
                <div className="h-12 w-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center shrink-0 group-hover:bg-brand-gradient group-hover:text-white transition-colors">
                  <Zap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-brand transition-colors mb-2">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <WaveDivider from="white" to="dark" flip />

      {/* Section 3: Benefits & Why Acceleron */}
      <section className="section-dark container mx-auto px-6 max-w-7xl relative z-10 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div>
              <div className="text-xs uppercase tracking-[0.4em] text-brand-red font-bold mb-3">Measurable Impact</div>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8">
                Key Business <span className="text-gradient">Benefits</span>
              </h2>
              <div className="space-y-4">
                {data.benefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-2xl border border-border/50 bg-background/50 backdrop-blur-xl">
                    <CheckCircle2 className="h-6 w-6 text-brand shrink-0" />
                    <span className="text-base font-semibold text-foreground">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="rounded-3xl border border-brand/30 bg-brand-gradient/10 p-8 sm:p-10 backdrop-blur-xl shadow-glow">
              <div className="flex items-center gap-3 mb-6">
                <Award className="h-8 w-8 text-brand" />
                <h3 className="text-2xl font-bold text-foreground">Why Acceleron?</h3>
              </div>
              <ul className="space-y-4 text-sm text-muted-foreground leading-relaxed mb-8">
                {data.whyAcceleron.map((w, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-brand-red shrink-0 mt-2" />
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3.5 text-sm font-bold text-white shadow-glow hover:scale-105 transition-all"
              >
                Schedule Executive Briefing <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <WaveDivider from="dark" to="white" />
    </main>
  );
}
