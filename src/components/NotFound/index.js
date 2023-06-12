import Header from '../Header'

import {NotFoundCard, NotFoundImage, NotFoundHeading} from './componentStyle'

const NotFound = () => (
  <>
    <Header />
    <NotFoundCard>
      <NotFoundImage
        src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png"
        alt="not found"
      />
      <NotFoundHeading>Page Not Found</NotFoundHeading>
      <NotFoundHeading as="p" notFound>
        We are sorry, the page you requested could not be found
      </NotFoundHeading>
    </NotFoundCard>
  </>
)

export default NotFound
