import React, { Component } from "react";
import ReactDOM from "react-dom";
import styled, { injectGlobal } from "styled-components";
import Animated,{
  bounceIn,
  bounceInDown,
  bounceInUp,
  bounceInLeft,
  bounceInRight,
  fadeIn,
  fadeInDown,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  jello,
  shake,
  tada,
  wobble,
  bounce,
  flash,
  headshake,
  pulse,
  rubberBrand,
  rotateIn,
  rotateInDownLeft,
  rotateInUpLeft,
  flip,
  flipInX
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
            { id: 5, name: "bounceInRight", effect: bounceInRight }
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
            { id: 5, name: "fadeInRight", effect: fadeInRight }
          ]
        },
        {
          id: 3,
          group: "rotate",
          effects: [
            { id: 1, name: "rotateIn", effect: rotateIn },
            { id: 2, name: "rotateInDownLeft", effect: rotateInDownLeft },
            { id: 3, name: "rotateInUpLeft", effect: rotateInUpLeft }
          ]
        },
        {
          id: 4,
          group: "flip",
          effects: [
            { id: 1, name: "flip", effect: flip },
            { id: 2, name: "flipInX", effect: flipInX }
          ]
        },
        {
          id: 5,
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
        <a href="https://github.com/you">
          <img
            style={{position:'absolute', top:0, right:0, border:0}}
            src="https://github.com/ysfzrn/styled-animated"
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
          <a href="https://styled-components.com/" >styled-components</a>
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
