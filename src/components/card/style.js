import styled from 'styled-components';

export const CardContainer = styled.div`
  max-width: 272px;
  box-shadow: 0px 4px 8px rgb(0 0 0 / 10%);
  border-radius: 16px;
  padding: 16px;
  transition: 0.3s;
  cursor: pointer;
  margin-bottom: 32px;
  border: 2px solid transparent;
  

  &:hover {
    border: 2px solid ${(props) => props.theme.primaryColor};
  }
`

export const IconPlant = styled.img`
  max-height: 150px;
  margin: auto;
  display: flex;
`
export const CardName = styled.p`
  color: ${(props) => props.theme.primaryColor};
  font-size: 16px;
  font-weight: 600;
  margin: 0;
`
export const CardFlights = styled.span`
  color: ${(props) => props.theme.grayColor};
  font-size: 12px;
`
