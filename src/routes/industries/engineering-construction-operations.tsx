import { createFileRoute } from "@tanstack/react-router";
import { Building2 } from "lucide-react";
import { IndustryTemplate } from "../../components/ui/IndustryTemplate";
import { INDUSTRIES_DATA } from "../../data/industriesData";

export const Route = createFileRoute("/industries/engineering-construction-operations")({
  head: () => ({
    meta: [
      { title: "Engineering, Construction & Operations — Acceleron Solutions" },
      { name: "description", content: "SAP S/4HANA EC&O project controls, contractor workforce management (CWMS), and Suraksha safety for construction mega-projects." },
    ],
  }),
  component: () => <IndustryTemplate data={INDUSTRIES_DATA["engineering-construction-operations"]} icon={<Building2 className="h-8 w-8" />} />,
});
