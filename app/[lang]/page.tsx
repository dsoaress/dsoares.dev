import { Locale } from "@/_data/i18n";
import { Header } from "../components/header";

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  return (
    <main>
      <Header lang={lang} />
    </main>
  );
}
