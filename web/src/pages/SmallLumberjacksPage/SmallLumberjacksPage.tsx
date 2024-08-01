import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const SmallLumberjacksPage = () => {
  return (
    <>
      <Metadata title="SmallLumberjacks" description="SmallLumberjacks page" />

      <h1>SmallLumberjacksPage</h1>
      <p>
        Find me in{' '}
        <code>
          ./web/src/pages/SmallLumberjacksPage/SmallLumberjacksPage.tsx
        </code>
      </p>
      <p>
        My default route is named <code>smallLumberjacks</code>, link to me with
        `<Link to={routes.smallLumberjacks()}>SmallLumberjacks</Link>`
      </p>
    </>
  )
}

export default SmallLumberjacksPage
