import { lighten } from 'polished'
import { AiOutlineStar } from 'react-icons/ai'
import styled, { css } from 'styled-components'

import { Heading } from '@/components/Heading'
import { Text } from '@/components/Text'
import { Project } from '@/types/project'

import { CardLink } from './Link'

const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: grid;
    gap: ${theme.spacing.md};
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid ${lighten(0.05, theme.colors.background)};
    border-radius: 0.35rem;
    padding: ${theme.spacing.xl};

    &:hover {
      background: ${lighten(0.04, theme.colors.background)};
      box-shadow: 4px 4px 16px 4px rgba(0, 0, 0, 0.05);
    }
  `}
`

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-self: flex-end;

  span {
    p {
      display: flex;
      align-items: center;
    }

    svg {
      margin-right: ${({ theme }) => theme.spacing.xs};
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
