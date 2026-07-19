/**
 * Renderar schema.org-data som JSON-LD. Sökmotorer läser detta för att förstå
 * vad sidan handlar om — det är vad som kan ge rika resultat i Google.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Innehållet är vår egen statiska data, inte användarinmatning.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
