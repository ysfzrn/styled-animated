import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Animated = props => {
  return (
    <Container
      {...props}
      animationFunction={props.animationFunction}
      duration={props.duration}
      delay={props.delay}
      iterationCount={props.iterationCount}
      direction={props.direction}
      timingFunction={props.timingFunction}
    >
      {props.children}
    </Container>
  );
};

Animated.propTypes = {
  animationFunction: PropTypes.func.isRequired,
  duration: PropTypes.number,
  timingFunction: PropTypes.string,
  delay: PropTypes.number,
  direction: PropTypes.string
};

Animated.defaultProps = {
  duration: 1,
  timingFunction: "linear",
  delay: 0,
  iterationCount: "finite",
  direction: "alternate"
};

const Container = styled.div`
    animation-name: ${p => p.animationFunction};
    animation-duration: ${p => p.duration}s;
    animation-timing-function: ${p => p.timingFunction};
    animation-delay: ${p => p.delay}s;
    animation-iteration-count: ${p => p.iterationCount};
    animation-direction: ${p => p.direction};
`;

export default Animated;
