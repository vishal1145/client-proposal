import metadata from "@/public/metadata.json";

export function getMetadata(page: string) {
  const pageMeta = metadata[page as keyof typeof metadata] || metadata.default;

  return {
    title: pageMeta.title,
    description: pageMeta.description,
    openGraph: {
      title: pageMeta.title,
      description: pageMeta.description,
      images: [pageMeta.image],
    },
    twitter: {
      card: "summary_large_image",
      title: pageMeta.title,
      description: pageMeta.description,
      images: [pageMeta.image],
    },
  };
}
