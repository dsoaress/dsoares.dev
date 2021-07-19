import { Card } from '@/components/Card'
import { Heading } from '@/components/Heading/styles'
import { Text } from '@/components/Text'
import projects from '@/content/projects.json'
import { useTranslation } from '@/hooks/useTranslation'

import { ProjectsList, Wrapper } from './styles'

export function Projects() {
  const { locale, t } = useTranslation()

  return (
    <Wrapper id="projects">
      <Heading as="h2" size="3xl" margin={6}>
        {t.projects.title}
      </Heading>
      <Text faded size="xl">
        {t.projects.description}
      </Text>

      <ProjectsList>
        {projects.map(project => {
          return (
            <Card
              key={project.repositoryUrl}
              image={`/projects/${project.image}`}
              title={project.name}
              type="project"
              url={project.repositoryUrl}
            >
              <Text>{project.description[locale]}</Text>
              <footer>
                <Text faded size="sm">
                  {project.tags.join(', ')}
                </Text>
              </footer>
            </Card>
          )
        })}
      </ProjectsList>
    </Wrapper>
  )
}
