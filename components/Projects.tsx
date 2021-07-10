import { useRouter } from 'next/router'
import styled from 'styled-components'
import media from 'styled-media-query'

import { Heading } from '@/components/Heading'
import { ProjectCard } from '@/components/ProjectCard'
import i18nData from '@/content/i18n.json'
import { Project } from '@/types/project'

const Wrapper = styled.div`
  margin: 76px 0;
`

const ProjectsList = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};

  ${media.greaterThan('medium')`
    grid-template-columns: 1fr 1fr;
    gap: ${({ theme }) => theme.spacing.xl};
  `}

  ${media.greaterThan('large')`
    grid-template-columns: 1fr 1fr 1fr;
  `}
`

export function Projects({ projects }: { projects: Project[] }) {
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
