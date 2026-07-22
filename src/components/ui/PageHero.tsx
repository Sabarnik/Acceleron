import { type ReactNode } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Breadcrumbs, type BreadcrumbItem } from "./Breadcrumbs";
import { Reveal, WaveDivider } from "./Animations";
import { Link } from "@tanstack/react-router";

type PageHeroProps = {
  title: string;
  subtitle: string;
  breadcrumbs: BreadcrumbItem[];
  image: string;
  ctaText?: string;
  ctaHref?: string;
  icon?: ReactNode;
  gradient?: string;
};

export function PageHero({
  title,
  subtitle,
  breadcrumbs,
  image,
  ctaText = "Talk to Our Experts",
  ctaHref = "/contact",
  icon,
  gradient = "from-[oklch(0.14_0.06_265)] to-[oklch(0.22_0.09_265)]",
}: PageHeroProps) {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        {/* Top Navbar Vignette for crisp separation */}
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-black/80 via-black/40 to-transparent z-[5] pointer-events-none" />

        {/* Light Mode Overlay: Deep Navy / Slate gradient that keeps image vibrant while separating from white navbar */}
        <div className="dark:hidden absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/70 to-transparent" />
        <div className="dark:hidden absolute inset-0 bg-gradient-to-r from-[#0f172a]/90 via-[#0f172a]/40 to-transparent" />
        <div className="dark:hidden absolute inset-0 bg-gradient-to-br from-brand-red/10 via-transparent to-brand/20 mix-blend-overlay" />

        {/* Dark Mode Overlay: Rich Midnight / Background gradient */}
        <div className="hidden dark:block absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="hidden dark:block absolute inset-0 bg-gradient-to-r from-background/95 via-background/60 to-transparent" />
        <div className={`hidden dark:block absolute inset-0 bg-gradient-to-br ${gradient} opacity-30 mix-blend-multiply`} />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 max-w-7xl pb-16 pt-32">
          <Reveal>
            <div className="mb-6">
              <Breadcrumbs items={breadcrumbs} />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-col items-start max-w-4xl">
              {icon && (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="mb-6"
                >
                  {icon}
                </motion.div>
              )}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.05]">
                {title}
              </h1>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl">
                {subtitle}
              </p>
              <Link
                to={ctaHref as any}
                className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-8 py-4 text-base font-bold text-white shadow-glow transition-all hover:scale-105"
              >
                {ctaText} <ArrowUpRight className="h-5 w-5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
      <WaveDivider from="dark" to="white" />
    </>
  );
}
