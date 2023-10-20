import { c } from "@/_data/config";
import { Locale, trans } from "@/_data/i18n";
import { Heading } from "./ui/heading";
import { Text } from "./ui/text";
import { Skills } from "./skills";
import Image from "next/image";

import avatar from "@/_data/assets/avatar.jpg";
import { Logo } from "./ui/logo";

export function Header({ lang }: { lang: Locale }) {
  const t = trans(lang);

  return (
    <>
      <header className="absolute flex h-screen w-full items-end justify-center pb-20 md:pb-8">
        <div className="z-10 grid gap-8 p-8 text-center">
          <Logo width={80} height={80} className="mx-auto hidden sm:block" />
          <Heading>{c.profile.title}</Heading>
          <Text>{t.description}</Text>

          {/* <ListeningNow /> */}

          <Skills />
        </div>
      </header>

      <div className="relative h-screen">
        <Image
          src={avatar}
          alt={c.profile.title}
          className="object-cover object-top"
          placeholder="blur"
          quality={100}
          fill
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-50 to-transparent dark:from-neutral-900" />
      </div>
    </>
  );
}
