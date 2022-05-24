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

  .details-container {
    position: absolute;
    overflow: auto;
    right: 0;
    top: 0;
    height: 90%;
    max-width: 408px;
    background: #FFFFFF;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 32px;
    padding: 24px;
    animation: slideout 1s forwards;

    .close {
      cursor: pointer;
      background-color: ${(props) => props.theme.grayColorLight};
      border-radius: 8px;
      margin-left: auto;
      max-width: 32px;
      max-height: 32px;
      display: flex;
      justify-content: center;
      padding: 4px;

      img {
        height: 32px;
      }
    }

    h1 {
      font-size: 36px;
      color: ${(props) => props.theme.primaryColor};
    }

    p {
      font-weight: 400;
    }

    .space-description {
      color: ${(props) => props.theme.grayColor};
      max-width: 344px;
      font-size: 16px;
    }

    .flight-numbers {
      color: ${(props) => props.theme.primaryColor};

      p {
        margin: 0;
      }

      span {
        font-weight: 600;
      }
    }
  }
`
