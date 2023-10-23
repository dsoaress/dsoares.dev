import { setStaticParamsLocale } from 'next-international/server'

import { getI18n } from '@/app/locales/server'

export default async function Home({ params: { locale } }: { params: { locale: string } }) {
  setStaticParamsLocale(locale)
  const t = await getI18n()
  return (
    <div>
      <h1>{t('nav.home')}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, accusamus aspernatur fuga
        voluptas odio facere error blanditiis tempora iste libero architecto dolorem ullam suscipit,
        magnam maiores magni tenetur dolore. Perferendis?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, accusamus aspernatur fuga
        voluptas odio facere error blanditiis tempora iste libero architecto dolorem ullam suscipit,
        magnam maiores magni tenetur dolore. Perferendis?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, accusamus aspernatur fuga
        voluptas odio facere error blanditiis tempora iste libero architecto dolorem ullam suscipit,
        magnam maiores magni tenetur dolore. Perferendis?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, accusamus aspernatur fuga
        voluptas odio facere error blanditiis tempora iste libero architecto dolorem ullam suscipit,
        magnam maiores magni tenetur dolore. Perferendis?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, accusamus aspernatur fuga
        voluptas odio facere error blanditiis tempora iste libero architecto dolorem ullam suscipit,
        magnam maiores magni tenetur dolore. Perferendis?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, accusamus aspernatur fuga
        voluptas odio facere error blanditiis tempora iste libero architecto dolorem ullam suscipit,
        magnam maiores magni tenetur dolore. Perferendis?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, accusamus aspernatur fuga
        voluptas odio facere error blanditiis tempora iste libero architecto dolorem ullam suscipit,
        magnam maiores magni tenetur dolore. Perferendis?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, accusamus aspernatur fuga
        voluptas odio facere error blanditiis tempora iste libero architecto dolorem ullam suscipit,
        magnam maiores magni tenetur dolore. Perferendis?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, accusamus aspernatur fuga
        voluptas odio facere error blanditiis tempora iste libero architecto dolorem ullam suscipit,
        magnam maiores magni tenetur dolore. Perferendis?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, accusamus aspernatur fuga
        voluptas odio facere error blanditiis tempora iste libero architecto dolorem ullam suscipit,
        magnam maiores magni tenetur dolore. Perferendis?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, accusamus aspernatur fuga
        voluptas odio facere error blanditiis tempora iste libero architecto dolorem ullam suscipit,
        magnam maiores magni tenetur dolore. Perferendis?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, accusamus aspernatur fuga
        voluptas odio facere error blanditiis tempora iste libero architecto dolorem ullam suscipit,
        magnam maiores magni tenetur dolore. Perferendis?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, accusamus aspernatur fuga
        voluptas odio facere error blanditiis tempora iste libero architecto dolorem ullam suscipit,
        magnam maiores magni tenetur dolore. Perferendis?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, accusamus aspernatur fuga
        voluptas odio facere error blanditiis tempora iste libero architecto dolorem ullam suscipit,
        magnam maiores magni tenetur dolore. Perferendis?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, accusamus aspernatur fuga
        voluptas odio facere error blanditiis tempora iste libero architecto dolorem ullam suscipit,
        magnam maiores magni tenetur dolore. Perferendis?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, accusamus aspernatur fuga
        voluptas odio facere error blanditiis tempora iste libero architecto dolorem ullam suscipit,
        magnam maiores magni tenetur dolore. Perferendis?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, accusamus aspernatur fuga
        voluptas odio facere error blanditiis tempora iste libero architecto dolorem ullam suscipit,
        magnam maiores magni tenetur dolore. Perferendis?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, accusamus aspernatur fuga
        voluptas odio facere error blanditiis tempora iste libero architecto dolorem ullam suscipit,
        magnam maiores magni tenetur dolore. Perferendis?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, accusamus aspernatur fuga
        voluptas odio facere error blanditiis tempora iste libero architecto dolorem ullam suscipit,
        magnam maiores magni tenetur dolore. Perferendis?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, accusamus aspernatur fuga
        voluptas odio facere error blanditiis tempora iste libero architecto dolorem ullam suscipit,
        magnam maiores magni tenetur dolore. Perferendis?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, accusamus aspernatur fuga
        voluptas odio facere error blanditiis tempora iste libero architecto dolorem ullam suscipit,
        magnam maiores magni tenetur dolore. Perferendis?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, accusamus aspernatur fuga
        voluptas odio facere error blanditiis tempora iste libero architecto dolorem ullam suscipit,
        magnam maiores magni tenetur dolore. Perferendis?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, accusamus aspernatur fuga
        voluptas odio facere error blanditiis tempora iste libero architecto dolorem ullam suscipit,
        magnam maiores magni tenetur dolore. Perferendis?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, accusamus aspernatur fuga
        voluptas odio facere error blanditiis tempora iste libero architecto dolorem ullam suscipit,
        magnam maiores magni tenetur dolore. Perferendis?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, accusamus aspernatur fuga
        voluptas odio facere error blanditiis tempora iste libero architecto dolorem ullam suscipit,
        magnam maiores magni tenetur dolore. Perferendis?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, accusamus aspernatur fuga
        voluptas odio facere error blanditiis tempora iste libero architecto dolorem ullam suscipit,
        magnam maiores magni tenetur dolore. Perferendis?
      </p>
    </div>
  )
}
