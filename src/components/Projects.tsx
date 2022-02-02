import { AiOutlineStar } from 'react-icons/ai'

import { Card } from '@/components/Card'
import { CardList } from '@/components/CardList'
import { Heading } from '@/components/Heading'
import { Section } from '@/components/Section'
import { Text } from '@/components/Text'
import { useData } from '@/hooks/useData'
import type { Project } from '@/types/project'

type ProjectsProps = {
  projects: Project[]
}

export function Projects({ projects }: ProjectsProps) {
  const { locale, c, t } = useData()
  const { title, description } = t.projects

  return c.parameters.showProjects ? (
    <Section id="projects">
      <Heading as="h2" size="3xl" className="mb-6">
        {title}
      </Heading>
      <Text faded size="xl">
        {description}
      </Text>

      <CardList>
        {projects.map((project, i) => (
          <Card
            key={i}
            image={project.cover}
            title={project.title}
            href={project.repositoryUrl}
            rel="noopener noreferrer"
            target="_blank"
            className={`umami--click--project-${project.title}`}
          >
            <Text>{project.description[locale]}</Text>
            <footer className="flex items-end justify-between">
              <Text faded size="sm">
                {project.tags}
              </Text>
              <span>
                {project.stars > 0 && (
                  <Text faded size="sm" className="flex items-center">
                    <AiOutlineStar className="mr-1" />
                    {project.stars}
                  </Text>
                )}
              </span>
            </footer>
          </Card>
        ))}
      </CardList>
    </Section>
  ) : null
}
