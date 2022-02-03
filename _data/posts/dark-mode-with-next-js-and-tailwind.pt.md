---
title: 'Dark mode com Next.js e Tailwind'
description: 'Nesse artigo vamos criar a base de uma aplicação simples em Next.js com seletor de temas e estilizado com Tailwind.'
cover: '/assets/posts/dark-mode-with-next-js-and-tailwind/cover.jpg'
date: '2021-08-16'
---

O dark mode é um recuso essencial em qualquer aplicação moderna. Nada mais irritante do que entrar num site com fundo branco às 3 horas da manhã. No entanto, não podemos esquecer que é também bastante irritante tentar ler algo num site escuro com o sol incidindo sobre a tela, logo a solução não se trata de projetar nossas aplicações para terem apenas o visual escuro, mas de dar a opção do usuário escolher o que é melhor para ele naquele momento. Nesse artigo vamos criar a base de uma aplicação simples em [Next.js](https://nextjs.org/) com seletor de temas e estilizado com [Tailwind](https://tailwindcss.com/). Você pode conferir [aqui o resultado final](https://darkmode-nextjs-tailwind.vercel.app).

Como referência, nosso projeto terá essa estrutura de arquivos:

<!-- prettier-ignore-start -->

```md
📦 darkmode-nextjs-tailwind
┣ 📂 components
┃ ┗ 📜 ThemeToggle.js
┣ 📂 pages
┃ ┣ 📜 _app.js
┃ ┗ 📜 index.js
┣ 📂 styles
┃ ┗ 📜 globals.css
┣ 📜 package.json
┣ 📜 postcss.config.js
┣ 📜 tailwind.config.js
┗ 📜 yarn.lock
```

<!-- prettier-ignore-end -->

Vamos começar instando nossas dependências, vou utilizar o yarn como gerenciador de pacotes, mas você pode usar o npm, obviamente:

```bash
yarn add next react react-dom
```

Vamos instalar também o Tailwind e suas dependências:

```bash
yarn add tailwindcss autoprefixer postcss
```

E finalizando, vamos instalar o [react-icons](https://react-icons.github.io/react-icons/) e o [next-themes](https://github.com/pacocoursey/next-themes). Esse último vai cuidar de fazer a alternância entre os modos `light` e `dark` na nossa aplicação. Sim, eu sei que instalar o react-icons para usar apenas 2 ícones é um completo desperdício, mas como esse tutorial se propõe em ser uma base para aplicações reais, acho válido inclui-lo.

```bash
yarn add react-icons next-themes
```

Agora precisaremos dos arquivos de configuração do Tailwind e do Postcss, para isso rodamos o comando abaixo que gerará os arquivos `tailwind.config.js` e `postcss.config.js`, simples assim.

```bash
npx tailwindcss init -p
```

De forma breve, existem três estratégias para lidarmos com a alternância de temas:

1. A primeira estratégia utiliza as classes `light` e `dark` na tag `html` das nossas páginas para controlar a aparência. A alteração dessas classes é feita dinamicamente via javascript pelo next-themes. Nesse modo podemos utilizar a variante `dark:` do Tailwind como por exemplo `text-black dark:text-white` que quer dizer que o texto será preto no tema claro e branco no tema escuro;

2. A segunda estratégia é a padrão do next-themes, ela usa variáveis de css para definir o esquema de cores da nossa aplicação nos modos `dark` e `light`. Essa estratégia, assim como a segunda, também nos permite ter um seletor manual, mas **não** nos permite usar a variante `dark:` do Tailwind, o que nos obriga a ter um planejamento muito preciso do esquema de cores antes de começarmos a codar, mais detalhes a seguir;

3. Já a terceira, e também a mais simples, é o modo `'media'` do Tailwind. Ele usa o `prefers-color-scheme` do usuário para definir se o site apresentará o tema claro ou o tema escuro de forma automática. Nesse modo não temos como ter um seletor manual para alternar entre temas e, por isso, não falarei dele.

Vamos começar com a primeira estratégia e depois lidamos com a segunda.

## Primeira estratégia: utilizando o modo 'class'

Começamos abrindo o arquivo `tailwind.config.js`. Nele vamos alterar o valor de `darkMode` que vem setado por padrão como `false` para `"class"`. Vamos aproveitar e também configurar o purge para limpar as classes de css não usadas pelo nosso projeto. Normalmente colocamos a pasta `components` e `pages`, o que significa informar ao Tailwind que é nessas pastas que contem classes css. Vai ficar assim:

```js
// ./tailwind.config.js

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
}
```

A última coisa que precisamos configurar para iniciar de fato é criar o nosso arquivo `_app.js` personalizado para podermos importar o css Tailwind e o provider do next-themes. Para os não iniciados em Next.js, esse arquivo precisa estar dentro da pasta `pages`. Ele ficará assim:

```jsx
// ./pages/_app.js

import { ThemeProvider } from 'next-themes'

import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
```

Basicamente estamos englobando nossa aplicação com o provider do next-themes. [Ele possui algumas options](https://github.com/pacocoursey/next-themes#api) e define algumas coisas como padrão como o `defaultTheme="system"` que define o tema padrão, para aqueles que nunca acessaram nosso site, como o tema do sistema do usuário (mas você pode alterar para `defaultTheme="light"'` ou `defaultTheme="dark"'`, caso prefira) e estamos definindo manualmente que o modo de atuação deve ser com classes css.

A partir do momento que o usuário acessar nossa aplicação e setar um modo manualmente, essa informação será guardada no local storage do navegador e será lida pelo next-themes sempre que nossa aplicação for reacessada por esse usuário. Mágico, não?

Já o css, que chamamos de `globals.css`, ficará dentro da pasta `styles`, na raiz do nosso projeto e será assim:

```css
/* ./styles/globals.css */

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply bg-gray-50
      text-gray-900
      transition-colors
      dark:bg-gray-900
      dark:text-gray-50;
  }
}
```

Bastante descritivo, né? Estamos dizendo que no tema `light` a cor de fundo é um cinza clarinho e que o texto é um cinza bem escuro (esse cinza da Tailwind se parece mais com um azul do que com um cinza, mas ok), já no tema `dark` nós invertemos, literalmente, o esquema de cores.

Vamos agora criar o componente para fazer a alternância de temas. Eu o chamarei de `ThemeToggle.js` e, como é um componente, ficará dentro da pasta `components`:

```jsx
// ./components/ThemeToggle.js

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

// Aqui temos os ícones de Lua e Sol
import { BiMoon, BiSun } from 'react-icons/bi'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // Aqui dizemos que esse componente só deve ser mostrado
  // depois da página carregada. Isso evita que o ícone
  // errado apareça antes do next-themes saber se deve
  // carregar o tema dark ou o tema light
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  // Uma função simples para verificar qual tema está ativo
  function isDark() {
    return theme === 'dark'
  }

  return (
    // E a logica em si
    <button
      className="focus:outline-none"
      onClick={() => setTheme(isDark() ? 'light' : 'dark')}
      aria-label="Theme toggle"
    >
      {isDark() ? <BiSun size={20} /> : <BiMoon size={20} />}
    </button>
  )
}
```

Agora que temos tudo pronto, vamos construir nossa página inicial:

```jsx
// ./pages/index.js

import ThemeToggle from '../components/ThemeToggle'

export default function IndexPage() {
  return (
    <div className="mx-auto max-w-screen-md">
      <header className="flex items-center justify-between p-8">
        <h1 className="text-xl">Hello world</h1>
        <ThemeToggle />
      </header>
    </div>
  )
}
```

E vamos adicionar no nosso `package.json` os scripts do Next:

```json
{
  // ...
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  }
  // ...
}
```

Pronto agora é só rodar `yarn dev` no seu terminal :)

## Segunda estratégia: utilizando o modo padrão do next-themes

A estratégia anterior é suficiente para a maioria dos casos, mas como não nos custa nada ir um pouco além, vamos construir um exemplo utilizando o comportamento padrão do next-themes, útil para layouts mais complexos e/ou para quando não queremos ou não podemos usar o Tailwind. Também é útil para adicionar dark mode a uma codebase já existente.

Vamos começar alterando nosso css para adicionar as variáveis com as cores:

```css
/* ./styles/globals.css */

@tailwind base;
@tailwind components;
@tailwind utilities;

/* Nossas novas variáveis */
:root {
  --color-body: #111827; /* cinza escuro */
  --color-background: #f9fafb; /* cinza claro */
}

[data-theme='dark'] {
  --color-body: #f9fafb; /* cinza claro */
  --color-background: #111827; /* cinza claro */
}

@layer base {
  body {
    @apply bg-background text-body;
  }
}
```

Agora vamos alterar a configuração do nosso `tailwind.config.css`. Vamos remover o `darkMode`, já que não vamos utilizar nenhum dos modos de dark mode do Tailwind, e vamos extender o tema com as cores que definimos como variáveis no css. Pode parecer trivial, mas não custa lembrar, você pode ter quantas cores forem necessárias e as cores podem ter qualquer nome.

```js
// ./tailwind.config.js

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        body: 'var(--color-body)',
        background: 'var(--color-background)'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
```

Por fim, alteramos o nosso `_app.js`: aqui vamos apenas remover o `attribute="class"`.

```jsx
// ./pages/_app.js

import { ThemeProvider } from 'next-themes'

import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
```

Pronto, temos o mesmo resultado de antes.

E é só isso, cobrimos aqui as duas principais formas de se lidar com alternância de temas em aplicações Next.js usando Tailwind. Você pode conferir [o código da primeira estratégia aqui](https://github.com/dsoaress/darkmode-nextjs-tailwind) e o [código da segunda aqui](https://github.com/dsoaress/darkmode-nextjs-tailwind/tree/second-strategy).
