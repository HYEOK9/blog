import type React from "react";
import type { Metadata, Viewport } from "next";
// constants
import {
  META_DESCRIPTION,
  META_OG_IMAGE,
  META_TITLE,
  GOOGLE_VERIFICATION,
} from "@constant/metaData";
// components
import ImagePrefetch from "@component/ImagePrefetch";
// style
import "../../styles/globals.css";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className="dark"
      style={{ backgroundColor: "rgb(40, 40, 51)" }}
    >
      <body>
        <ImagePrefetch />
        <div id="portal" />
        <main>{children}</main>
      </body>
    </html>
  );
}

export async function generateMetadata() {
  const metadata: Metadata = {
    title: META_TITLE,
    description: META_DESCRIPTION,
    robots: {
      index: true,
      follow: false,
    },
    verification: { google: GOOGLE_VERIFICATION },
  };

  return {
    ...metadata,
    openGraph: {
      title: META_TITLE,
      images: [META_OG_IMAGE],
    },
  };
}

export const viewport: Viewport = {
  width: -1,
  initialScale: -1,
  viewportFit: "cover",
};
