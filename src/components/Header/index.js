import {Link} from 'react-router-dom'

import {HeaderCard, WebSiteLogo} from './componentStyle'

import './index.css'

const Header = () => (
  <HeaderCard>
    <Link to="/" className="link">
      <WebSiteLogo
        src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
        alt="website logo"
      />
    </Link>
  </HeaderCard>
)

export default Header
