import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, ArrowUpRight, ArrowRight, Menu, X, ShoppingBag, Wrench, TrendingUp, Boxes, ShieldCheck, Layers, Code2, Server, Briefcase, BarChart3 } from "lucide-react";
import { ThemeToggle } from "../ui/ThemeToggle";
import { Link } from "@tanstack/react-router";
import { SAPLogo, SalesforceLogo, ZohoLogo } from "../ui/Icons";
import { SUB_SERVICES_DATA } from "../../data/servicesData";

function getSubUrl(catHref: string, subTitle: string): string {
  const match = SUB_SERVICES_DATA.find(s => s.title.toLowerCase() === subTitle.toLowerCase());
  if (match) {
    return `/services/${match.categorySlug}/${match.slug}`;
  }
  const fallbackSlug = subTitle.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  const catSlug = catHref.split('/').pop() || "sap";
  return `/services/${catSlug}/${fallbackSlug}`;
}

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", dropdown: "services" },
  { label: "Products", href: "/products", dropdown: "products" },
  { label: "Industries", href: "/industries" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

type ProductItem = { name: string; desc: string; href: string; img?: string; icon: any; gradient: string };

export const PRODUCTS: ProductItem[] = [
  { name: "Suraksha", desc: "Field Safety Platform", href: "/products/suraksha", icon: ShieldCheck, gradient: "from-teal-500 to-cyan-600" },
  { name: "Tyre Health", desc: "Fleet Lifecycle Tracking", href: "/products/tyre-health", icon: Wrench, gradient: "from-blue-500 to-indigo-600" },
  { name: "QMS", desc: "Quality Management System", href: "/products/qms", icon: Layers, gradient: "from-fuchsia-500 to-violet-600" },
  { name: "CWMS", desc: "Contractor Workforce Management", href: "/products/cwms", icon: Boxes, gradient: "from-cyan-500 to-blue-600" },
  { name: "Supplier Portal", desc: "Vendor Onboarding & SAP", href: "/products/supplier-portal", icon: ShoppingBag, gradient: "from-violet-500 to-purple-600" },
  { name: "PJP", desc: "Pre Journey Plan & Tracking", href: "/products/pjp", icon: TrendingUp, gradient: "from-indigo-500 to-blue-600" },
];

type ServiceCategory = {
  name: string;
  href: string;
  icon?: any;
  Logo?: any;
  useLogo?: boolean;
  img?: string;
  gradient: string;
  subs: string[];
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  { name: "SAP", href: "/services/sap", Logo: SAPLogo, useLogo: true, gradient: "from-blue-600 to-indigo-700", subs: ["SAP HXM, CX", "SAP Analytics", "SAP Cloud Migration", "SAP Managed Services", "RISE with SAP", "S/4 HANA Transformation"] },
  { name: "Zoho", href: "/services/zoho", Logo: ZohoLogo, useLogo: true, gradient: "from-red-500 to-orange-600", subs: ["Zoho WorkDrive", "Zoho Analytics", "Zoho CRM", "Zoho People & Payroll", "Zoho Books", "Zoho ERP"] },
  { name: "Software Dev", href: "/services/software-development", icon: Code2, gradient: "from-emerald-500 to-teal-600", subs: ["Automation Solutions", "Web Development", "Mobile/Web Apps"] },
  { name: "IT Infra", href: "/services/it-infrastructure", icon: Server, gradient: "from-slate-500 to-zinc-600", subs: ["Infrastructure AMC", "Network Monitoring", "Cloud Infra", "Email Management"] },
  { name: "Salesforce", href: "/services/salesforce", Logo: SalesforceLogo, useLogo: true, gradient: "from-sky-500 to-blue-600", subs: ["Migration", "Implementation", "Lightning Platform", "Service Cloud", "Sales Cloud", "CPQ"] },
  { name: "Cyber Security", href: "/services/cyber-security", icon: ShieldCheck, gradient: "from-amber-500 to-orange-600", subs: ["ISO 27001", "VAPT", "Email Security", "Network Security", "Endpoint Security"] },
  { name: "CXO Advisory", href: "/services/cxo-advisory", icon: Briefcase, gradient: "from-violet-500 to-purple-600", subs: ["Digital Transformation", "IT Roadmap", "Strategic IT Investment"] },
  { name: "Analytics", href: "/services/analytics", icon: BarChart3, gradient: "from-cyan-500 to-blue-600", subs: ["Data Lake", "Visualization & Reporting", "Data Warehousing"] },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    h(); window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border py-3 shadow-sm" : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center text-foreground">
          <img src="/logo.png" alt="Acceleron Solutions" className="h-8 object-contain dark:brightness-0 dark:invert opacity-95 transition-opacity hover:opacity-100" />
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <div key={l.label}
              className="relative"
              onMouseEnter={() => l.dropdown && setActiveDropdown(l.dropdown)}
              onMouseLeave={() => l.dropdown && setActiveDropdown(null)}
            >
              <Link to={l.href as any} className="flex items-center gap-1 rounded-full px-4 py-2 text-sm text-foreground/80 transition-colors hover:text-foreground hover:bg-muted/[0.06]">
                {l.label}
                {l.dropdown && <ChevronDown className="h-3.5 w-3.5" />}
              </Link>

              {/* Products Dropdown */}
              <AnimatePresence>
                {l.dropdown === "products" && activeDropdown === "products" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.25 }}
                    className="fixed left-1/2 top-[76px] w-[min(95vw,680px)] -translate-x-1/2 z-50"
                  >
                    <div className="bg-background/95 backdrop-blur-md border border-border rounded-2xl p-4 shadow-glow">
                      <div className="grid grid-cols-2 gap-2">
                        {PRODUCTS.map((p) => (
                          <Link key={p.name} to={p.href as any} onClick={() => setActiveDropdown(null)} className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-muted/40 dark:hover:bg-muted/10">
                            <div className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-gradient-to-br ${p.gradient} overflow-hidden p-1`}>
                              {p.img ? <img src={p.img} alt={p.name} className="h-full w-full object-cover rounded-md drop-shadow-md" /> : <p.icon className="h-5 w-5 text-white" />}
                            </div>
                            <div className="min-w-0">
                              <div className="flex items-center gap-1.5 text-sm font-medium text-foreground">
                                {p.name}
                                <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                              </div>
                              <div className="truncate text-xs text-foreground/60">{p.desc}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Services Mega-menu Dropdown */}
              <AnimatePresence>
                {l.dropdown === "services" && activeDropdown === "services" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.25 }}
                    className="fixed left-1/2 top-[76px] w-[min(95vw,880px)] -translate-x-1/2 z-50 max-h-[82vh] overflow-y-auto"
                  >
                    <div className="bg-background/95 backdrop-blur-md border border-border rounded-2xl p-5 shadow-glow">
                      <div className="grid grid-cols-4 gap-4">
                        {SERVICE_CATEGORIES.map((cat) => {
                          const IconComp = cat.icon;
                          return (
                            <div key={cat.name} className="group flex flex-col">
                              <Link to={cat.href as any} onClick={() => setActiveDropdown(null)} className="flex items-center gap-2.5 rounded-lg p-2 transition-colors hover:bg-muted/40 dark:hover:bg-muted/10 mb-2">
                                <div className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-gradient-to-br ${cat.gradient} overflow-hidden p-1.5 border border-border/20`}>
                                  {cat.img ? (
                                    <img src={cat.img} alt={cat.name} className="h-full w-full object-cover rounded" />
                                  ) : cat.useLogo && cat.Logo ? (
                                    <cat.Logo className="h-6 w-6" />
                                  ) : IconComp ? (
                                    <IconComp className="h-5 w-5 text-white" />
                                  ) : null}
                                </div>
                                <span className="text-sm font-bold text-foreground group-hover:text-brand transition-colors">{cat.name}</span>
                              </Link>
                                <ul className="space-y-1 pl-2 flex-1">
                                  {cat.subs.map((sub) => (
                                    <li key={sub}>
                                      <Link to={getSubUrl(cat.href, sub) as any} onClick={() => setActiveDropdown(null)} className="block rounded-md px-2 py-1 text-xs text-muted-foreground transition-colors hover:text-foreground hover:bg-muted/30">
                                        {sub}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-2">
          <ThemeToggle />
          <Link to="/contact" className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-all hover:scale-105 hover:shadow-soft">
            Get in touch <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden glass-dark border-t border-border mt-3"
          >
            <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((l) => (
                <div key={l.label}>
                  {l.dropdown === "services" ? (
                    <>
                      <button
                        onClick={() => setMobileExpanded(mobileExpanded === "services" ? null : "services")}
                        className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm text-foreground/80 hover:bg-muted/5"
                      >
                        {l.label}
                        <ChevronDown className={`h-4 w-4 transition-transform ${mobileExpanded === "services" ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {mobileExpanded === "services" && (
                          <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                            <div className="pl-4 pb-2 space-y-1">
                              <Link to="/services" onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-muted/5">
                                All Services
                              </Link>
                              {SERVICE_CATEGORIES.map((cat) => (
                                <Link key={cat.name} to={cat.href as any} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-sm text-foreground/60 hover:bg-muted/5">
                                  {cat.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : l.dropdown === "products" ? (
                    <>
                      <button
                        onClick={() => setMobileExpanded(mobileExpanded === "products" ? null : "products")}
                        className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm text-foreground/80 hover:bg-muted/5"
                      >
                        {l.label}
                        <ChevronDown className={`h-4 w-4 transition-transform ${mobileExpanded === "products" ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {mobileExpanded === "products" && (
                          <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                            <div className="pl-4 pb-2 space-y-1">
                              <Link to="/products" onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-muted/5">
                                All Products
                              </Link>
                              {PRODUCTS.map((p) => (
                                <Link key={p.name} to={p.href as any} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-sm text-foreground/60 hover:bg-muted/5">
                                  {p.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link to={l.href as any} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2.5 text-sm text-foreground/80 hover:bg-muted/5 block">
                      {l.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-border pt-4">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-foreground/80">Theme</span>
                  <ThemeToggle />
                </div>
                <Link to="/contact" onClick={() => setOpen(false)} className="inline-flex items-center justify-center gap-1.5 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background">
                  Get in touch <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export { Nav };
