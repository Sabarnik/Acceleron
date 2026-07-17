import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, ArrowUpRight, ArrowRight, Menu, X, ShoppingBag, Wrench, TrendingUp, Boxes, ShieldCheck, Layers } from "lucide-react";
import { ThemeToggle } from "../ui/ThemeToggle";
import { Link } from "@tanstack/react-router";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products", dropdown: true },
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

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
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
              onMouseEnter={() => l.dropdown && setShowProducts(true)}
              onMouseLeave={() => l.dropdown && setShowProducts(false)}
            >
              <Link to={l.href as any} className="flex items-center gap-1 rounded-full px-4 py-2 text-sm text-foreground/80 transition-colors hover:text-foreground hover:bg-muted/[0.06]">
                {l.label}
                {l.dropdown && <ChevronDown className="h-3.5 w-3.5" />}
              </Link>
              <AnimatePresence>
                {l.dropdown && showProducts && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.25 }}
                    className="absolute left-1/2 top-full pt-3 w-[640px] -translate-x-1/2"
                  >
                    <div className="bg-background/95 backdrop-blur-md border border-border rounded-2xl p-4 shadow-glow">
                      <div className="grid grid-cols-2 gap-2">
                        {PRODUCTS.map((p) => (
                          <Link key={p.name} to={p.href as any} onClick={() => setShowProducts(false)} className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-muted/40 dark:hover:bg-muted/10">
                            <div className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-gradient-to-br ${p.gradient} overflow-hidden p-1`}>
                              {p.img ? <img src={p.img} alt={p.name} className="h-full w-full object-contain drop-shadow-md" /> : <p.icon className="h-5 w-5 text-white" />}
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
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden glass-dark border-t border-border mt-3"
          >
            <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((l) => (
                <Link key={l.label} to={l.href as any} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2.5 text-sm text-foreground/80 hover:bg-muted/5">
                  {l.label}
                </Link>
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
