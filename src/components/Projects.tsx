import Image from 'next/image'
import { useRouter } from 'next/router'
import type { IconType } from 'react-icons'
import { AiOutlineFork, AiOutlineStar } from 'react-icons/ai'

import { CardLink, Heading, Section, Text } from '@/components'
import { useData } from '@/hooks/useData'
import type { Locales, Project } from '@/types'

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
  const { locale } = useRouter()
  const { t } = useData()
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
        {projects?.map((project, i) => (
          <div
            key={i}
            className="relative rounded-md border border-solid border-neutral-200 transition-all duration-300 hover:bg-neutral-200 hover:shadow-md dark:border-neutral-800 dark:hover:bg-neutral-800"
          >
            <CardLink
              href={project.repositoryUrl}
              aria-label={project.title}
              className={`umami--click--project-${project.title}`}
              external
            />

            <div className="relative h-64 overflow-hidden rounded-tl-md rounded-tr-md">
              <Image
                src={project.cover}
                alt={project.title}
                objectFit="cover"
                layout="fill"
                placeholder="blur"
                blurDataURL={project.coverBlurDataURL}
              />
            </div>

            <div className="grid gap-4 p-6">
              <Heading as="h3" size="lg">
                {project.title}
              </Heading>

              <Text>{project.description[locale as Locales]}</Text>
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
