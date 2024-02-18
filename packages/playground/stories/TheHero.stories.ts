import type { Meta, StoryObj } from '@storybook/vue3'
import { action } from '@storybook/addon-actions'

import { TheHero } from '#components'

import * as PictureStories from './Picture.stories'

const meta = {
  title: 'HomePage/TheHero',
  component: TheHero,
  tags: ['autodocs'],
  argTypes: {
    onSearchClick: {},
  },
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
} satisfies Meta<typeof TheHero>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    ...PictureStories.Default.args,
  },
}

export const actionsData = {
  onSearchClick: action('search-click'),
}
