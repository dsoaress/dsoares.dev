import { useRouter } from 'next/router'

import { Heading } from '@/components/Heading/styles'
import { ProjectCard } from '@/components/ProjectCard'
import i18nData from '@/content/i18n.json'
import { Project } from '@/types/project'

import { ProjectsList, Wrapper } from './styles'

type ProjectProps = {
  projects: Project[]
}

export function Projects({ projects }: ProjectProps) {
  const { locale } = useRouter()
  const projectsTitle = i18nData.projects.title[locale] as string

  return (
    <Wrapper id="projects">
      <Heading level={2} size="lg" margin="xl">
        {projectsTitle}
      </Heading>

      <ProjectsList>
        {projects?.map(project => {
          if (project.fork) return
          else if (!project.description) return
          else return <ProjectCard key={project.id} project={project} />
        })}
      </ProjectsList>
    </Wrapper>
  )
}
