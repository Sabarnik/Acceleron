import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { Reveal, WaveDivider } from "../components/ui/Animations";
import { PageHero } from "../components/ui/PageHero";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <PageHero
        title="Let's Talk"
        subtitle="Ready to modernize your operations? Our experts are here to help."
        breadcrumbs={[{ label: "Contact" }]}
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
        ctaText="Send us a message"
        ctaHref="#form"
      />

      <section id="form" className="section-dark container mx-auto px-6 max-w-7xl relative z-10 py-24">
        <div className="grid md:grid-cols-2 gap-16">
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-border/50 bg-background/50 p-10 backdrop-blur-xl h-full">
              <h2 className="text-2xl font-bold text-foreground mb-8">Send us a message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">Name</label>
                  <input type="text" className="w-full rounded-xl border border-border bg-background p-3 text-foreground focus:outline-none focus:ring-2 focus:ring-brand/50" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">Email</label>
                  <input type="email" className="w-full rounded-xl border border-border bg-background p-3 text-foreground focus:outline-none focus:ring-2 focus:ring-brand/50" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">Message</label>
                  <textarea rows={4} className="w-full rounded-xl border border-border bg-background p-3 text-foreground focus:outline-none focus:ring-2 focus:ring-brand/50" />
                </div>
                <button type="button" className="w-full rounded-xl bg-brand-gradient py-4 text-white font-bold shadow-glow hover:scale-[1.02] transition-transform">Send Message</button>
              </form>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Global Delivery Centers</h2>
                <div className="space-y-6">
                  {[
                    "Kolkata, India",
                    "Delhi NCR, India",    
                    "West Virginia, USA",
                    "NSW, Australia",
                    "Singapore"
                  ].map((loc, i) => (
                    <div key={i} className="flex items-center gap-4 text-muted-foreground">
                      <MapPin className="h-5 w-5 text-brand" /> <span>{loc}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Direct Contact</h2>
                <div className="space-y-4 text-muted-foreground">
                  <div className="flex items-center gap-4"><Mail className="h-5 w-5 text-brand"/> contact@acceleronsolutions.com</div>
                  <div className="flex items-center gap-4"><Phone className="h-5 w-5 text-brand"/> +91 33 2345 6789</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
