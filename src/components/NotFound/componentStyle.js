// eslint-disable-next-line import/no-unresolved
import styled from 'styled-components'

export const NotFoundCard = styled.div`
  width: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px 0px 0px 0px;
`
export const NotFoundImage = styled.img`
  width: 30%;
`
export const NotFoundHeading = styled.h1`
  font-family: 'Roboto';
  color: #475569;
  font-weight: ${props => (props.notFound ? '400' : '700')};
  font-size: ${props => (props.notFound ? '16px' : '30px')};
`
