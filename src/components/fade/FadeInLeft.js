import React from "react";
import styled from "styled-components";
import { fadeInLeft } from "../../index";

const FadeInLeft = props => {
  return (
    <Container {...props} >
      {props.children}
    </Container>
  );
};

const Container = styled.div`
    animation:${fadeInLeft} 1s linear;
`;

export default FadeInLeft;
