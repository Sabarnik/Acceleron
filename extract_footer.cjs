const fs = require('fs');

const content = fs.readFileSync('src/routes/index.tsx', 'utf8');

// I'm not going to extract from index.tsx anymore, because I've already trimmed index.tsx!
// I'll just write Footer.tsx manually.

const footerCode = `import { motion } from "motion/react";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { LinkedInIcon, XTwitterIcon, GitHubIcon, InstagramIcon } from "../ui/Icons";

export function Footer() {
  return (
    <footer className="relative border-t border-border/50 bg-background pt-24 pb-12 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,oklch(0.62_0.22_260/0.05),transparent_50%)]" />
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-4">
            <a href="/" className="inline-block text-2xl font-bold tracking-tight text-foreground mb-6">
              Acceleron<span className="text-brand">.</span>
            </a>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-sm">
              Engineering digital excellence through modern enterprise platforms, SAP, and Salesforce.
            </p>
            <div className="flex gap-4">
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
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-semibold text-foreground mb-6">Services</h4>
            <ul className="space-y-4">
              <li><a href="/services" className="text-muted-foreground hover:text-brand transition-colors">SAP S/4HANA</a></li>
              <li><a href="/services" className="text-muted-foreground hover:text-brand transition-colors">Salesforce</a></li>
              <li><a href="/services" className="text-muted-foreground hover:text-brand transition-colors">Custom Dev</a></li>
              <li><a href="/services" className="text-muted-foreground hover:text-brand transition-colors">Cybersecurity</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-semibold text-foreground mb-6">Products</h4>
            <ul className="space-y-4">
              <li><a href="/products/suraksha" className="text-muted-foreground hover:text-brand transition-colors">Suraksha</a></li>
              <li><a href="/products/tyre-health" className="text-muted-foreground hover:text-brand transition-colors">Tyre Health</a></li>
              <li><a href="/products/qms" className="text-muted-foreground hover:text-brand transition-colors">QMS</a></li>
              <li><a href="/products/cwms" className="text-muted-foreground hover:text-brand transition-colors">CWMS</a></li>
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
`;

fs.writeFileSync('src/components/layout/Footer.tsx', footerCode);
console.log("Footer regenerated cleanly.");
