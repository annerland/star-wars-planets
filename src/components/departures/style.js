import styled from 'styled-components'

export const DeparturesTitle = styled.p`
  font-weight: 600;
  text-transform: uppercase;
  margin-top: 36px;
  color: ${(props) => props.theme.grayColor};
`

export const DeparturesContent = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 23px;
`

export const DepartureIcon = styled.img`
  max-height: 25px;
  display: flex;
  margin: 0 16px;
`

export const DeparturesFlights = styled.p`
  margin: 0;
  font-weight: 600 !important;
  color: ${(props) => props.theme.primaryColor};
`

export const DeparturesDate = styled.span`
  font-size: 12px;
  color: ${(props) => props.theme.grayColor};
`