import { FdhHomepage } from "@/components/fdh-homepage";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Fresh Direct Home",
    alternateName: "FDH",
    description:
      "Premium food marketplace for farm-fresh groceries and verified local home chef meals.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://fdh.example.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <FdhHomepage />
    </>
  );
}
