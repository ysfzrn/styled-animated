import React from 'react'
import styled from 'styled-components'
import { fadeInDown } from '../../index'
import PropTypes from "prop-types";

const FadeInDown = (props) => {
    return(
        <Container {...props}> 
            {props.children}
        </Container>
    )
}

FadeInDown.propTypes = {
  duration: PropTypes.number,
  timingFunction: PropTypes.string,
  delay: PropTypes.number,
  direction: PropTypes.string,
};

FadeInDown.defaultProps = {
  duration: 1,
  timingFunction: "linear",
  delay: 0,
  iterationCount: "finite",
  direction: "alternate",
};

const Container = styled.div`
    animation-name: ${fadeInDown};
    animation-duration: ${p=>p.duration}s;
    animation-timing-function: ${p=>p.timingFunction};
    animation-delay: ${p=>p.delay}s;
    animation-iteration-count: ${p=>p.iterationCount};
    animation-direction: ${p=>p.direction};
`;

export default FadeInDown