import { motion } from "motion/react";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { LinkedInIcon, XTwitterIcon, GitHubIcon, InstagramIcon } from "../ui/Icons";
import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="relative bg-background pt-24 pb-12 overflow-hidden text-foreground">
      <div className="absolute inset-0 grid-lines opacity-10" />
      <svg className="absolute inset-x-0 top-0 h-16 w-full" preserveAspectRatio="none" viewBox="0 0 1440 60">
        <motion.path
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 2 }}
          d="M0,30 Q360,60 720,30 T1440,30" fill="none" stroke="url(#g-footer)" strokeWidth="1.5" />
        <defs>
          <linearGradient id="g-footer" x1="0" x2="1">
            <stop offset="0" stopColor="oklch(0.82 0.14 210)" />
            <stop offset="0.5" stopColor="oklch(0.62 0.22 260)" />
            <stop offset="1" stopColor="oklch(0.62 0.22 300)" />
          </linearGradient>
        </defs>
      </svg>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block mb-6">
              <img src="/logo.png" alt="Acceleron Solutions" className="h-10 object-contain dark:brightness-0 dark:invert opacity-90" />
            </Link>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-sm">
              Engineering digital excellence through modern enterprise platforms, SAP, and Salesforce.
            </p>
            <div className="flex gap-4 mb-10">
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-muted/50 text-muted-foreground hover:bg-brand hover:text-white transition-colors">
                <LinkedInIcon className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-muted/50 text-muted-foreground hover:bg-brand hover:text-white transition-colors">
                <XTwitterIcon className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-muted/50 text-muted-foreground hover:bg-brand hover:text-white transition-colors">
                <GitHubIcon className="h-5 w-5" />
              </a>
            </div>

            <div className="mt-2">
              <div className="text-lg font-semibold text-foreground">Get the Acceleron dispatch</div>
              <div className="text-sm text-muted-foreground mt-1 mb-4">One email a month. Enterprise transformation, decoded.</div>
              <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3">
                <input type="email" placeholder="you@company.com" className="w-full sm:w-auto min-w-0 flex-1 rounded-full border border-border bg-muted/5 px-5 py-3 text-sm outline-none placeholder:text-foreground/40 focus:border-cyan" />
                <button className="w-full sm:w-auto rounded-full bg-brand-gradient px-6 py-3 text-sm font-medium text-[#FFFFFF] shadow-glow transition-all hover:scale-105">Subscribe</button>
              </form>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-semibold text-foreground mb-6">Services</h4>
            <ul className="space-y-4">
              <li><Link to="/services/sap" className="text-muted-foreground hover:text-brand transition-colors">SAP</Link></li>
              <li><Link to="/services/salesforce" className="text-muted-foreground hover:text-brand transition-colors">Salesforce</Link></li>
              <li><Link to="/services/zoho" className="text-muted-foreground hover:text-brand transition-colors">Zoho</Link></li>
              <li><Link to="/services/cyber-security" className="text-muted-foreground hover:text-brand transition-colors">Cyber Security</Link></li>
              <li><Link to="/services/software-development" className="text-muted-foreground hover:text-brand transition-colors">Software Dev</Link></li>
              <li><Link to="/services/analytics" className="text-muted-foreground hover:text-brand transition-colors">Analytics</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-semibold text-foreground mb-6">Products</h4>
            <ul className="space-y-4">
              <li><Link to="/products/suraksha" className="text-muted-foreground hover:text-brand transition-colors">Suraksha</Link></li>
              <li><Link to="/products/tyre-health" className="text-muted-foreground hover:text-brand transition-colors">Tyre Health</Link></li>
              <li><Link to="/products/qms" className="text-muted-foreground hover:text-brand transition-colors">QMS</Link></li>
              <li><Link to="/products/cwms" className="text-muted-foreground hover:text-brand transition-colors">CWMS</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="font-semibold text-foreground mb-6">Global Presence</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                <span>Kolkata • Delhi • West Virginia • Singapore • NSW</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-brand shrink-0" />
                <a href="mailto:contact@acceleronsolutions.com" className="hover:text-brand transition-colors">contact@acceleronsolutions.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-brand shrink-0" />
                <span>+91 33 2345 6789</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Acceleron Solutions. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
