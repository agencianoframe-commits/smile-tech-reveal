import { createFileRoute } from "@tanstack/react-router";
import { LuminaSite } from "@/components/lumina/LuminaSite";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lumina — Next Generation Invisible Orthodontics" },
      {
        name: "description",
        content:
          "Advanced 3D scanning and custom invisible aligners designed to create predictable, comfortable and precise smiles.",
      },
      { property: "og:title", content: "Lumina — Invisible Orthodontics" },
      {
        property: "og:description",
        content: "Precision technology for the smile you want.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: LuminaSite,
});
