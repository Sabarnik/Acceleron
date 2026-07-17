import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Users, Target, HeartPulse, Rocket, Award, ShieldCheck, Database, Zap, Layers, MapPin, Globe, Lightbulb, Compass } from "lucide-react";
import { Reveal, WaveDivider } from "../components/ui/Animations";
import { PageHero } from "../components/ui/PageHero";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  const MILESTONES = [
    { y: "2010", t: "Founded in Bangalore", d: "3 engineers, one workshop." },
    { y: "2014", t: "First SAP S/4HANA delivery", d: "Enterprise-grade from day one." },
    { y: "2018", t: "Salesforce Platinum Partner", d: "CRM at scale." },
    { y: "2022", t: "AI practice launched", d: "Generative + predictive, in production." },
    { y: "2025", t: "200+ enterprises. 28 countries.", d: "And we're just getting started." },
  ];

  const OFFICES = [
    { city: "Kolkata", country: "India", label: "HQ & Delivery Center" },
    { city: "Delhi NCR", country: "India", label: "Delivery Center" },
    { city: "Bangalore", country: "India", label: "Engineering Hub" },
    { city: "Singapore", country: "Singapore", label: "APAC Office" },
    { city: "West Virginia", country: "USA", label: "Americas Office" },
    { city: "NSW", country: "Australia", label: "APAC Office" },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <PageHero
        title="We Didn't Learn Industry From a Case Study. We Grew Up In One."
        subtitle="Acceleron Solutions is the technology arm of the Gainwell Group—bringing decades of mining, manufacturing, and heavy-equipment domain knowledge together with modern SAP, Salesforce, and custom software expertise."
        breadcrumbs={[{ label: "About" }]}
        image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
        ctaText="Talk to Our Experts"
        ctaHref="/contact"
      />

      {/* Our Story - synced with home page */}
      <section className="section-dark container mx-auto px-6 max-w-7xl relative z-10 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal delay={0.1}>
            <div className="space-y-6">
              <div className="text-xs uppercase tracking-[0.4em] text-brand-red">Our Story</div>
              <h2 className="text-3xl md:text-5xl font-semibold leading-[1.05] tracking-tight text-foreground">
                We don't sell software. <span className="text-gradient">We ship outcomes.</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Acceleron Solutions is part of the 80-year-old Gainwell Group, a diversified conglomerate headquartered in Kolkata, India, with branches and subsidiaries across India, the USA, Australia, Singapore, Nepal, and Bhutan.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We were built to be Gainwell Group's technology engine—the team that takes decades of real operational knowledge in mining, engineering, and heavy equipment, and turns it into SAP implementations, Salesforce platforms, and custom applications that actually fit how these businesses run. That heritage is also why external clients outside the Gainwell ecosystem trust us: we're not consultants reading about your industry for the first time on your project.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                For 15 years we've partnered with enterprises across four continents to modernize what matters — from core ERP to customer intelligence — while keeping the people who use these systems at the center of every decision.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="relative rounded-3xl bg-muted/30 p-6 sm:p-10 text-foreground shadow-glow overflow-hidden border border-border/50">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_70%_20%,oklch(0.62_0.22_260/0.08),transparent_60%)]" />
              <div className="relative">
                <div className="text-xs uppercase tracking-[0.3em] text-brand-red">Milestones</div>
                <div className="mt-8 space-y-6">
                  {MILESTONES.map((m, i) => (
                    <motion.div
                      key={m.y}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.6 }}
                      className="relative flex gap-6 border-l border-border pl-6"
                    >
                      <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-brand shadow-[0_0_20px_oklch(0.62_0.22_260)]" />
                      <div className="w-14 shrink-0 text-sm font-semibold text-brand-red">{m.y}</div>
                      <div className="min-w-0">
                        <div className="text-sm font-medium">{m.t}</div>
                        <div className="text-xs text-foreground/50">{m.d}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <WaveDivider from="dark" to="white" />

      {/* Core Values */}
      <section className="container mx-auto px-6 max-w-7xl relative z-10 py-24">
        <Reveal>
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-[0.4em] text-brand-red mb-4">Our Values</div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our values guide our interactions, our design decisions, and our commitment to client success.
            </p>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Collaboration", desc: "Working in a team to achieve a common goal.", icon: Users },
            { title: "Customer Centricity", desc: "Creating superior customer relationships to drive business sustainability.", icon: Target },
            { title: "Caring", desc: "A positive workplace built on respect, empathy, and well-being for others.", icon: HeartPulse },
            { title: "Entrepreneurship", desc: "Providing an empowering environment to facilitate independent decision-making.", icon: Rocket },
            { title: "Excellence", desc: "Adding value to every activity to achieve a higher level of standards across the organization.", icon: Award },
          ].map((val, i) => (
            <Reveal key={val.title} delay={0.1 * i}>
              <motion.div
                whileHover={{ y: -4 }}
                className="group rounded-2xl border border-border/50 bg-muted/20 p-8 hover:bg-muted/40 transition-all h-full hover:shadow-soft"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-glow">
                  <val.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{val.title}</h3>
                <p className="text-muted-foreground">{val.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      <WaveDivider from="white" to="dark" flip />

      {/* Why Businesses Choose Acceleron */}
      <section className="section-dark container mx-auto px-6 max-w-7xl relative z-10 py-24">
        <Reveal>
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-[0.4em] text-brand-red mb-4">Why Us</div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Why Businesses Choose Acceleron</h2>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: "Industry-Native, Not Industry-Curious", desc: "Our roots inside the Gainwell Group mean we understand mining, manufacturing, and heavy-equipment operations at a level most IT vendors simply can't—fleet uptime, safety compliance, and shop-floor realities.", icon: Compass },
            { title: "Decades of SAP Depth", desc: "100+ highly experienced SAP resources in Kolkata and Greater Noida with an average of 7+ years of experience and extensive S/4HANA migration expertise.", icon: Database },
            { title: "Products, Not Just Projects", desc: "We've built, deployed, and continuously optimized 6 proprietary enterprise applications within our own active industrial operations before taking them to market.", icon: Lightbulb },
            { title: "One Partner, Full Stack", desc: "We handle the entire technology lifecycle across EAS, custom development, cloud infrastructure, and advanced cybersecurity under one roof.", icon: Layers },
          ].map((val, i) => (
            <Reveal key={val.title} delay={0.1 * i}>
              <motion.div
                whileHover={{ y: -4 }}
                className="flex gap-6 rounded-2xl border border-border/50 bg-background/50 p-8 hover:border-brand/30 transition-all backdrop-blur-xl hover:shadow-soft"
              >
                <div className="shrink-0 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-glow">
                  <val.icon className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{val.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{val.desc}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      <WaveDivider from="dark" to="white" />

      {/* Global Locations - synced with home page */}
      <section className="container mx-auto px-6 max-w-7xl relative z-10 py-24">
        <Reveal>
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-[0.4em] text-brand-red mb-4">Global Presence</div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Where We Operate</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Delivery centers and regional offices across 3 continents, ensuring follow-the-sun support for our global clients.
            </p>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {OFFICES.map((office, i) => (
            <Reveal key={office.city} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                className="rounded-2xl border border-border bg-muted/20 p-6 text-center hover:border-brand/30 hover:shadow-soft transition-all"
              >
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-glow">
                  <Globe className="h-4 w-4" />
                </div>
                <div className="text-sm font-semibold text-foreground">{office.city}</div>
                <div className="text-xs text-muted-foreground mt-1">{office.country}</div>
                <div className="text-[10px] uppercase tracking-widest text-foreground/40 mt-2">{office.label}</div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
