import styled from 'styled-components';

export const CardContainer = styled.div`
  .card-container {
    max-width: 272px;
    box-shadow: 0px 4px 8px rgb(0 0 0 / 10%);
    border-radius: 16px;
    padding: 16px;
    transition: 0.3s;
    cursor: pointer;
    border: 1px solid transparent;
    

    &:hover {
      border: 1px solid ${(props) => props.theme.primaryColor};
    }
  }

  img {
    max-height: 150px;
    margin: auto;
    display: flex;
  }

  p {
    color: ${(props) => props.theme.primaryColor};
    font-size: 16px;
    font-weight: 600;
    margin: 0;
  }

  span {
    color: ${(props) => props.theme.grayColor};
    font-size: 12px;
  }
`
