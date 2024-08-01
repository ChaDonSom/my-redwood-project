import { render } from '@redwoodjs/testing/web'

import SmallLumberjacksPage from './SmallLumberjacksPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SmallLumberjacksPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SmallLumberjacksPage />)
    }).not.toThrow()
  })
})
