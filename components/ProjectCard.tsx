import { darken, lighten } from 'polished'
import { AiOutlineStar } from 'react-icons/ai'
import styled from 'styled-components'

import { Heading } from '@/components/Heading'
import { Text } from '@/components/Text'
import { Project } from '@/types/project'

import { CardLink } from './Link'

const Wrapper = styled.div`
  position: relative;
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid ${({ theme }) => lighten(0.05, theme.colors.background)};
  border-radius: 0.35rem;
  padding: ${({ theme }) => theme.spacing.xl};

  &:hover {
    background: ${({ theme }) => lighten(0.04, theme.colors.background)};
    box-shadow: 4px 4px 16px 4px rgba(0, 0, 0, 0.05);
  }

  p + p {
    display: flex;
    justify-content: space-between;
    align-self: flex-end;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => darken(0.2, theme.colors.text)};
    line-height: 1;

    span {
      display: flex;
      align-items: center;

      svg {
        margin-right: ${({ theme }) => theme.spacing.xs};
      }
    }
  }
`

export function ProjectCard({ project }: { project: Project }) {
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
      <Text>
        {project.language}
        <span>
          <AiOutlineStar />
          {project.stargazersCount}
        </span>
      </Text>
    </Wrapper>
  )
}
