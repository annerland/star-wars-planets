import styled from 'styled-components'

export const DetailsContainer = styled.div`
  @keyframes slideout {
    from {
      right: -500px;
    }

    to {
      right: 0;
    }
  }

  position: absolute;
  overflow: auto;
  right: 0;
  top: 0;
  height: 100%;
  max-width: 408px;
  background: #FFFFFF;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 32px;
  padding: 24px;
  animation: slideout 1s forwards;
`

export const Close = styled.div`
  cursor: pointer;
  background-color: ${(props) => props.theme.grayColorLight};
  border-radius: 8px;
  margin-left: auto;
  max-width: 32px;
  max-height: 32px;
  display: flex;
  justify-content: center;
  padding: 4px;

  &:hover {
    opacity: 0.8;
  }
`
export const CloseIconStyle = styled.img`
  height: 32px;
`
export const DetailsTitle = styled.h1`
  font-size: 36px;
  color: ${(props) => props.theme.primaryColor};
`
export const DetailsDescription = styled.p`
  color: ${(props) => props.theme.grayColor};
  max-width: 344px;
  font-size: 16px;
`
export const FlightNumbers = styled.p`
  color: ${(props) => props.theme.primaryColor};
  margin: 0;
`
export const Number = styled.span`
  font-weight: 600;
`
