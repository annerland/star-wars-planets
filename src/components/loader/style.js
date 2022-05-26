import styled from "styled-components";

const LoaderStyle = styled.div`
  @keyframes loaderAnimation{
    0%{
        background-position: -468px 0
    }
    100%{
        background-position: 468px 0
    }
  }

  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: loaderAnimation;
  animation-timing-function: linear;
  background: #f6f7f8;
  background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
  background-size: 1000px 104px;
  position: relative;
  height: 20px;
  overflow: hidden;
  margin: 8px 0;
`

export default LoaderStyle
