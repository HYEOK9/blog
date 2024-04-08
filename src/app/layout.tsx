import type React from "react";
import type { Metadata } from "next";
// constants
import {
  META_DESCRIPTION,
  META_OG_IMAGE,
  META_TITLE,
} from "@constant/metaData";
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
      <meta name="viewport" content="viewport-fit=cover" />
      <body>
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
  };

  return {
    ...metadata,
    openGraph: {
      title: META_TITLE,
      images: [META_OG_IMAGE],
    },
  };
}
