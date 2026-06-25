import { createFileRoute } from "@tanstack/react-router";
import { LuminaSite } from "@/components/lumina/LuminaSite";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lumina — Ortodoncia Invisible de Nueva Generación" },
      {
        name: "description",
        content:
          "Escaneo 3D avanzado y alineadores invisibles a medida para sonrisas predecibles, cómodas y precisas.",
      },
      { property: "og:title", content: "Lumina — Ortodoncia Invisible" },
      {
        property: "og:description",
        content: "Tecnología de precisión para la sonrisa que querés.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: LuminaSite,
});
