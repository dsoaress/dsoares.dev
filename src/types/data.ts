import en from '@/data/en-us.json'
import pt from '@/data/pt-br.json'
import { data } from '@/lib/data'

export type DataType = typeof en | typeof pt

export type DataContextProps = {
  asPath: string
  defaultLocale: string
  locale: keyof typeof data
  locales: string[]
  d: DataType
}

export type RouterProps = Omit<DataContextProps, 'd'>

export type DataResponse = {
  allDatas: {
    edges: {
      node: DataContentResponse
    }[]
  }
}

type DataContentResponse = {
  title: string
  short_title: string
  description: string
  avatar: {
    url: string
    placeholder: {
      url: string
    }
  }
  umami_domain: string
  umami_id: string
  umami_src: string
  social_links: {
    label: string
    url: {
      url: string
    }
  }[]
  favicon: {
    [key: string]: {
      url: string
    }
  }
  links: {
    label: string
    url: string
  }[]
  show_nav: boolean
  resume: string
  file: {
    url: string
  }
  show_resume: boolean
  projects_title: string
  projects_description: string
  show_projects: boolean
  posts_title: string
  posts_description: string
  show_posts: boolean
  posts_reading_time: string
  posts_read_more: string
  not_found: string
  internal_error: string
  button_label: string
  footer: string
  show_footer: boolean
}
