import type { Metadata, Viewport } from "next";
import "./globals.css";
import { memorialIdentity } from "@/lib/data/program-content";

export const metadata: Metadata = {
  title: `In Loving Memory of ${memorialIdentity.displayName}`,
  description:
    "A digital celebration of life, with a memorial book, order of service, bilingual hymns, photographs and tributes.",
  applicationName: "The Memorial Folio",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: `In Loving Memory of ${memorialIdentity.displayName}`,
    description:
      "A life remembered with love. A legacy held in faith.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#070c18",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
