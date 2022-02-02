export const pt = {
  nav: [
    {
      label: 'Início',
      url: '/'
    },
    {
      label: 'Projetos',
      url: 'projects'
    },
    {
      label: 'Posts',
      url: 'posts'
    }
  ],
  resume: {
    title: 'Currículo',
    file: '/assets/resume-pt.pdf'
  },
  projects: {
    title: 'Projetos',
    description: 'Alguns dos meus projetos no GitHub.'
  },
  posts: {
    title: 'Posts',
    description:
      'Aqui estão os posts mais recentes. Costumo escrever sobre tecnologias web e assuntos relacionados.',
    readingTime: (time: number) => `minuto${time > 1 && 's'} de leitura`,
    readMore: 'leia mais'
  },
  errors: {
    notFound: 'Não encontrado',
    internalError: 'Erro interno',
    buttonLabel: 'Voltar à página inicial'
  },
  footer: 'Feito com 💚 e'
}
