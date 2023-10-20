import "./globals.css";

import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Header } from "../components/header";
import { Locale, trans } from "@/_data/i18n";
import { c } from "@/_data/config";

export function generateMetadata({ params: { lang } }: { params: { lang: Locale } }): Metadata {
  const t = trans(lang);
  return { title: c.profile.title, description: t.description };
}

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }, { lang: "pt" }];
}

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={lang}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
