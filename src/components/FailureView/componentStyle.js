// eslint-disable-next-line import/no-unresolved
import styled from 'styled-components'

export const FailureImage = styled.img`
  width: 30%;
`

export const FailureHeading = styled.h1`
  font-family: 'Roboto';
  color: #475569;
  font-weight: ${props => (props.addFont ? '400' : '700')};
  font-size: ${props => (props.addFont ? '16px' : '30px')};
`
export const Button = styled.button`
  width: 80px;
  height: 30px;
  background-color: #4656a1;
  border: none;
  outline: none;
  cursor: pointer;
  font-family: 'Roboto';
  color: #ffffff;
  font-weight: 500;
  font-size: 14px;
  border-radius: 4px;
`
