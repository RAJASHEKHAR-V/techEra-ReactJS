import {Link} from 'react-router-dom'

import {CourseItem, EraLogo, Name} from './componentStyle'

import './index.css'

const EraItem = props => {
  const {era} = props
  const {id, name, logoUrl} = era

  return (
    <Link to={`/courses/${id}`} className="link">
      <CourseItem>
        <EraLogo src={logoUrl} alt={name} />
        <Name>{name}</Name>
      </CourseItem>
    </Link>
  )
}

export default EraItem
