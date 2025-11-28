export default function metadata() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME;
  const siteDescription = process.env.NEXT_PUBLIC_SITE_DESCRIPTION;

  return {
    title: siteName,
    description: siteDescription,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: siteUrl,
    },
    openGraph: {
      title: siteName,
      description: siteDescription,
      url: siteUrl,
      siteName: siteName,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: siteName,
      description: siteDescription,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
