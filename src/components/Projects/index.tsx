import { Heading } from '@/components/Heading/styles'
import { ProjectCard } from '@/components/ProjectCard'
import { useTranslation } from '@/hooks/useTranslation'
import { Project } from '@/types/project'

import { ProjectsList, Wrapper } from './styles'

type ProjectProps = {
  projects: Project[] | undefined
}

export function Projects({ projects }: ProjectProps) {
  const { t } = useTranslation()

  return (
    <Wrapper id="projects">
      <Heading level={2} size="lg" margin="xl">
        {t.projects.title}
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
