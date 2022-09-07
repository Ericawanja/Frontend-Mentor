import styled from "styled-components";
import { starsBackground } from "./starsBackground";

const Container = styled.div`
color:white;
  position: relative;
  min-height: 100vh;
  background-color: #16213e;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    height: 2px;
    width: 2px;
    top: -2px;
    box-shadow: ${starsBackground};
    border-radius: 100px;
  }
`;

function Wrapper({ children }) {
  return <Container>{children}</Container>;
}

export default Wrapper;
