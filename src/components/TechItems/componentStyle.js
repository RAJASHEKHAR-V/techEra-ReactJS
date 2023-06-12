// eslint-disable-next-line import/no-unresolved
import styled from 'styled-components'

export const TechCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: ${props => (props.failed ? 'center' : 'flex-start')};
  align-items: ${props => (props.failed ? 'center' : 'flex-start')};
  padding-left: 50px;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  color: #1e293b;
  font-weight: 700;
  font-size: 30px;
`

export const TechnologyCard = styled.ul`
  width: 100%;
  margin: 0px;
  padding: 0px;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
`
