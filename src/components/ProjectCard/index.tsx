import { AiOutlineStar } from 'react-icons/ai'

import { Heading } from '@/components/Heading/styles'
import { CardLink } from '@/components/Link'
import { Text } from '@/components/Text/styles'
import { Project } from '@/types/project'

import { Footer, Wrapper } from './styles'

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Wrapper>
      <CardLink
        href={project.htmlUrl}
        aria-label={project.name}
        rel="noopener noreferrer"
        target="_blank"
        className={`umami--click--project-${project.name}`}
      />
      <Heading level={3} size="md">
        {project.name}
      </Heading>
      <Text>{project.description}</Text>
      <Footer>
        <Text faded size="sm">
          {project.language}
        </Text>
        <span>
          <Text faded size="sm">
            <AiOutlineStar />
            {project.stargazersCount}
          </Text>
        </span>
      </Footer>
    </Wrapper>
  )
}
