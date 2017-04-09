import React, { Component } from "react";
import ReactDOM from "react-dom";
import styled, { injectGlobal } from "styled-components";
import Animated, {
  bounceIn,
  bounceInDown,
  bounceInUp,
  bounceInLeft,
  bounceInRight,
  bounceOut,
  bounceOutDown,
  bounceOutLeft,
  bounceOutRight,
  bounceOutUp,
  fadeIn,
  fadeInDown,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  fadeOut,
  fadeOutDown,
  fadeOutLeft,
  fadeOutRight,
  fadeOutUp,
  flip,
  flipInX,
  flipInY,
  flipOutX,
  flipOutY,
  rotateIn,
  rotateInDownLeft,
  rotateInUpLeft,
  rotateInDownRight,
  rotateInUpRight,
  rotateOut,
  rotateOutDownLeft,
  rotateOutDownRight,
  rotateOutUpLeft,
  rotateOutUpRight,
  lightSpeedIn,
  lightSpeedOut,
  slideInDown,
  slideInLeft,
  slideInRight,
  slideInUp,
  zoomIn,
  zoomInDown,
  zoomInLeft,
  zoomInRight,
  zoomInUp,
  zoomOut,
  zoomOutDown,
  zoomOutLeft,
  zoomOutRight,
  zoomOutUp,
  jello,
  shake,
  tada,
  wobble,
  bounce,
  flash,
  headshake,
  pulse,
  rubberBrand
} from "../src";

injectGlobal`
    body {
        font-family: Roboto, sans-serif;
        margin: 0;
        padding: 0;
        height:100%;
        overflow-x: hidden;
    } 
`;

export default class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedEffect: bounceIn,
      items: [
        {
          id: 1,
          group: "bounce",
          effects: [
            { id: 1, name: "bounceIn", effect: bounceIn },
            { id: 2, name: "bounceInDown", effect: bounceInDown },
            { id: 3, name: "bounceInUp", effect: bounceInUp },
            { id: 4, name: "bounceInLeft", effect: bounceInLeft },
            { id: 5, name: "bounceInRight", effect: bounceInRight },
            { id: 6, name: "bounceOut", effect: bounceOut },
            { id: 7, name: "bounceOutLeft", effect: bounceOutLeft },
            { id: 8, name: "bounceOutRight", effect: bounceOutRight },
            { id: 9, name: "bounceOutUp", effect: bounceOutUp },
            { id: 10, name: "bounceOutDown", effect: bounceOutDown }
          ]
        },
        {
          id: 2,
          group: "fade",
          effects: [
            { id: 1, name: "fadeIn", effect: fadeIn },
            { id: 2, name: "fadeInDown", effect: fadeInDown },
            { id: 3, name: "fadeInUp", effect: fadeInUp },
            { id: 4, name: "fadeInLeft", effect: fadeInLeft },
            { id: 5, name: "fadeInRight", effect: fadeInRight },
            { id: 6, name: "fadeOut", effect: fadeOut },
            { id: 7, name: "fadeOutDown", effect: fadeOutDown },
            { id: 8, name: "fadeOutLeft", effect: fadeOutLeft },
            { id: 9, name: "fadeOutRight", effect: fadeOutRight },
            { id: 10, name: "fadeOutUp", effect: fadeOutUp }
          ]
        },
        {
          id: 3,
          group: "rotate",
          effects: [
            { id: 1, name: "rotateIn", effect: rotateIn },
            { id: 2, name: "rotateInDownLeft", effect: rotateInDownLeft },
            { id: 3, name: "rotateInUpLeft", effect: rotateInUpLeft },
            { id: 4, name: "rotateInDownRight", effect: rotateInDownRight },
            { id: 5, name: "rotateInUpRight", effect: rotateInUpRight },
            { id: 6, name: "rotateOut", effect: rotateOut },
            { id: 7, name: "rotateOutDownLeft", effect: rotateOutDownLeft },
            { id: 8, name: "rotateOutDownRight", effect: rotateOutDownRight },
            { id: 9, name: "rotateOutUpLeft", effect: rotateOutUpLeft },
            { id: 10, name: "rotateOutUpRight", effect: rotateOutUpRight }
          ]
        },
        {
          id: 4,
          group: "flip",
          effects: [
            { id: 1, name: "flip", effect: flip },
            { id: 2, name: "flipInX", effect: flipInX },
            { id: 3, name: "flipInY", effect: flipInY },
            { id: 4, name: "flipOutX", effect: flipOutX },
            { id: 5, name: "flipOutY", effect: flipOutY }
          ]
        },
        {
          id: 5,
          group: "lightspeed",
          effects: [
            { id: 1, name: "lightSpeedIn", effect: lightSpeedIn },
            { id: 2, name: "lightSpeedOut", effect: lightSpeedOut }
          ]
        },
        {
          id: 6,
          group: "slide",
          effects: [
            { id: 1, name: "slideInDown", effect: slideInDown },
            { id: 2, name: "slideInLeft", effect: slideInLeft },
            { id: 3, name: "slideInRight", effect: slideInRight },
            { id: 4, name: "slideInUp", effect: slideInUp }
          ]
        },
        {
          id: 7,
          group: "zoom",
          effects: [
            { id: 1, name: "zoomIn", effect: zoomIn },
            { id: 2, name: "zoomInDown", effect: zoomInDown },
            { id: 3, name: "zoomInUp", effect: zoomInUp },
            { id: 4, name: "zoomInLeft", effect: zoomInLeft },
            { id: 5, name: "zoomInRight", effect: zoomInRight },
            { id: 6, name: "zoomOut", effect: zoomOut },
            { id: 7, name: "zoomOutDown", effect: zoomOutDown },
            { id: 8, name: "zoomOutLeft", effect: zoomOutLeft },
            { id: 9, name: "zoomOutRight", effect: zoomOutRight },
            { id: 10, name: "zoomOutUp", effect: zoomOutUp },
          ]
        },
        {
          id: 8,
          group: "others",
          effects: [
            { id: 1, name: "bounce", effect: bounce },
            { id: 2, name: "jello", effect: jello },
            { id: 3, name: "shake", effect: shake },
            { id: 4, name: "tada", effect: tada },
            { id: 5, name: "wobble", effect: wobble },
            { id: 6, name: "flash", effect: flash },
            { id: 7, name: "headshake", effect: headshake },
            { id: 8, name: "pulse", effect: pulse },
            { id: 9, name: "rubberBrand", effect: rubberBrand }
          ]
        }
      ]
    };
  }

  handleOnChange = e => {
    const { items } = this.state;
    for (let i = 0; i < items.length; i++) {
      for (let z = 0; z < items[i].effects.length; z++) {
        if (items[i].effects[z].name === e.currentTarget.value) {
          this.setState({
            selectedEffect: items[i].effects[z].effect
          });
          return;
        }
      }
    }
  };

  render() {
    const { items, selectedEffect } = this.state;
    return (
      <Container>
        <a href="https://github.com/ysfzrn/styled-animated">
          <img
            style={{ position: "absolute", top: 0, right: 0, border: 0 }}
            src="https://camo.githubusercontent.com/e7bbb0521b397edbd5fe43e7f760759336b5e05f/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f677265656e5f3030373230302e706e67"
            alt="Fork me on GitHub"
            data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_green_007200.png"
          />
        </a>
        <Animated animationFunction={selectedEffect}>
          <Text>
            Styled-Animated
          </Text>
        </Animated>

        <Message>
          {" "}
          I
          {" "}
          <AnimatedHeart animationFunction={pulse} iterationCount="infinite">
            ❤
          </AnimatedHeart>
          {" "}
          <a href="https://styled-components.com/">styled-components</a>
        </Message>
        <MySelect onChange={this.handleOnChange}>
          {items.map((item, i) => {
            return (
              <optgroup key={i} label={item.group}>
                {" "}{item.effects.map((effect, z) => {
                  return (
                    <option key={z} value={effect.name}>{effect.name}</option>
                  );
                })}{" "}
              </optgroup>
            );
          })}
        </MySelect>

      </Container>
    );
  }
}

const Text = styled.div`
    font-size:48px;
    color:#E91E63; 
    margin-bottom:20px; 
`;

const Message = styled.div`
    display:flex;
    aling-items:center;
    justify-content:center;
    flex-direction:row;
    font-size:24px;
    margin-bottom:20px; 
`;
const AnimatedHeart = styled(Animated)`
    color:#E91E63;
    padding-left:4px;
    padding-right:4px;
`;

const MySelect = styled.select`
    width:200px;
    height:48px;
    background-color:white;
    font-size:16px;
`;

const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    height:80vh;
    flex-direction:column;
`;

ReactDOM.render(<Root />, document.getElementById("app"));
