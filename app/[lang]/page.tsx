import { c } from "@/_data/config";
import { Locale, trans } from "@/_data/i18n";

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const t = trans(lang);
  const request = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
    next: {
      revalidate: 60,
    },
  }).then((response) => response.json());
  return (
    <main>
      <h1>{c.profile.title}</h1>
      <p>{t.description}</p>
      <pre>{JSON.stringify(request, null, 2)}</pre>
    </main>
  );
}
