import type { Meta, StoryObj } from '@storybook/react'

import SmallLumberjacksPage from './SmallLumberjacksPage'

const meta: Meta<typeof SmallLumberjacksPage> = {
  component: SmallLumberjacksPage,
}

export default meta

type Story = StoryObj<typeof SmallLumberjacksPage>

export const Primary: Story = {}
