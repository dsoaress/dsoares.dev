import { Meta, Story } from '@storybook/react/types-6-0'

import Link from './Link'

export default {
  title: 'Link',
  component: Link,
  parameters: {
    docs: {
      description: {
        component:
          'The Link component, by default, requires the `href` prop and a `children`. It is the `Link` component of Next.js.'
      }
    }
  },
  argTypes: {
    href: {
      description: '`href` prop',
      defaultValue: '#',
      type: { name: 'string', required: true }
    },
    children: {
      description: 'Children element',
      defaultValue: 'Lorem ipsum',
      type: { name: 'string', required: true }
    }
  }
} as Meta

const Template: Story = props => <Link {...props} />

export const Default = Template.bind({})
