import { createFileRoute } from "@tanstack/react-router";
import { Truck } from "lucide-react";
import { IndustryTemplate } from "../../components/ui/IndustryTemplate";
import { INDUSTRIES_DATA } from "../../data/industriesData";

export const Route = createFileRoute("/industries/transportation-services-logistics")({
  head: () => ({
    meta: [
      { title: "Transportation & Logistics Solutions — Acceleron Solutions" },
      { name: "description", content: "Fleet IoT analytics, Tyre Health monitoring, SAP Transportation Management, and Pre-Journey Planning applications." },
    ],
  }),
  component: () => <IndustryTemplate data={INDUSTRIES_DATA["transportation-services-logistics"]} icon={<Truck className="h-8 w-8" />} />,
});
