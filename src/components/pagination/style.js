import styled from 'styled-components'

export const PaginationStyle = styled.div`
  .pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 16px 0;

    .item {
      display: inline-block;
      cursor: pointer;
      padding: 3px 10px 4px 10px;
      margin: 0 4px 0 4px;

      &:hover:not(.disabled) {
        color: ${(props) => props.theme.primaryColor};
        font-weight: 600;
        border-radius: 4px;
        text-align: center;
      }

      &.active {
        color: ${(props) => props.theme.primaryColor};
        border-radius: 4px;
        font-weight: 600;
      }
    }

    img {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 15px;
      cursor: pointer;
      margin: 4px;

      &:hover {
        opacity: 0.8;
      }
    }
}
`