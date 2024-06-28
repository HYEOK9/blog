import type React from "react";
import type { Metadata, Viewport } from "next";
import Head from "next/head";
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
      <Head>
        <meta
          name="google-site-verification"
          content="tHD5deKM9cKDonPC64anPK5zK98typnX2y_Hx23Ow9I"
        />
      </Head>
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

export const viewport: Viewport = {
  width: -1,
  initialScale: -1,
  viewportFit: "cover",
};
