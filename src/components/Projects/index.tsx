import { AiOutlineStar } from 'react-icons/ai'

import { Card } from '@/components/Card'
import { CardList } from '@/components/CardList'
import { Heading } from '@/components/Heading/styles'
import { Section } from '@/components/Section'
import { Text } from '@/components/Text'
import { useData } from '@/hooks/useData'
import { ProjectType } from '@/types/project'

import { Footer } from './styles'

type ProjectsProps = {
  projects: ProjectType[]
}

export function Projects({ projects }: ProjectsProps) {
  const { d } = useData()
  const { title, description } = d.projects

  return (
    <Section id="projects">
      <Heading as="h2" size="3xl" margin={6}>
        {title}
      </Heading>
      <Text faded size="xl">
        {description}
      </Text>

      <CardList>
        {projects.map(project => {
          return (
            <Card
              key={project.id}
              image={project.cover}
              title={project.title}
              type="project"
              url={project.repositoryUrl}
            >
              <Text>{project.description}</Text>
              <Footer>
                <Text faded size="sm">
                  {project.tags}
                </Text>
                <span>
                  {project.stars > 0 && (
                    <Text faded size="sm">
                      <AiOutlineStar />
                      {project.stars}
                    </Text>
                  )}
                </span>
              </Footer>
            </Card>
          )
        })}
      </CardList>
    </Section>
  )
}
