import Image from 'next/image'
import type { IconType } from 'react-icons'
import { AiOutlineFork, AiOutlineStar } from 'react-icons/ai'

import { Heading } from '@/components/Heading'
import { CardLink } from '@/components/Link'
import { Section } from '@/components/Section'
import { Text } from '@/components/Text'
import { useData } from '@/hooks/useData'
import type { Project } from '@/types/project'

type ProjectsProps = {
  projects: Project[]
}

type InfoMetadataProps = {
  icon: IconType
  info: number
}

function InfoMetadata({ icon: Icon, info }: InfoMetadataProps) {
  return info > 0 ? (
    <span>
      <Text faded size="sm" className="flex items-center">
        <Icon className="mr-0.5" />
        {info}
      </Text>
    </span>
  ) : null
}

export function Projects({ projects }: ProjectsProps) {
  const { locale, t } = useData()
  const { title, description } = t.projects

  return (
    <Section id="projects">
      <Heading as="h2" size="3xl" className="mb-6">
        {title}
      </Heading>
      <Text faded size="xl">
        {description}
      </Text>

      <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <div
            key={i}
            className="relative rounded-md border border-solid border-neutral-800 transition-all duration-300 hover:bg-neutral-800 hover:shadow-md"
          >
            <CardLink
              href={project.repositoryUrl}
              aria-label={project.title}
              className={`umami--click--project-${project.title}`}
              external
            />

            <div className="relative h-64 overflow-hidden rounded-tl-md rounded-tr-md">
              <Image src={project.cover} alt={project.title} objectFit="cover" layout="fill" />
            </div>

            <div className="grid gap-4 p-6">
              <Heading as="h3" size="lg">
                {project.title}
              </Heading>

              <Text>{project.description[locale]}</Text>
              <footer className="flex items-end justify-between">
                <Text faded size="sm">
                  {project.tags}
                </Text>

                <div className="ml-3 flex gap-3">
                  <InfoMetadata icon={AiOutlineFork} info={project.forks} />
                  <InfoMetadata icon={AiOutlineStar} info={project.stars} />
                </div>
              </footer>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
