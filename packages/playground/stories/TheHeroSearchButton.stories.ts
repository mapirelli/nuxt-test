import type { Meta, StoryObj } from '@storybook/vue3'
import { action } from '@storybook/addon-actions'

import { TheHeroSearchButton } from '#components'

const meta = {
  title: 'HomePage/TheHeroSearchButton',
  component: TheHeroSearchButton,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    onSearchClick: {},
  },
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
} satisfies Meta<typeof TheHeroSearchButton>

export default meta
type Story = StoryObj<typeof meta>

export const actionsData = {
  onSearchClick: action('search-click'),
}

export const Default: Story = {
  args: {
    label: 'The Hero Search Button',
  },
}
