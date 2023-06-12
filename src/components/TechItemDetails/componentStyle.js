import styled from 'styled-components'

export const Card = styled.div`
  background-color: #ffffff;
  width: 80%;
  display: flex;
  flex-direction: ${props => (props.failed ? 'column' : 'row')};
  justify-content: ${props => (props.failed ? 'center' : 'flex-start')};
  align-items: center;
  box-shadow: ${props => (props.failed ? 'none' : '0px 4px 4px 4px #e8e8e8')};
  margin: 30px 0px 0px 0px;
  padding: 30px;
`
export const CourseImage = styled.img`
  width: 20%;
  margin-right: 10px;
`

export const DetailsCard = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  color: ${props => (props.para ? '#64748b' : '#1e293b')};
  font-weight: ${props => (props.para ? '400' : '700')};
  font-size: ${props => (props.para ? '16px' : '20px')};
`
