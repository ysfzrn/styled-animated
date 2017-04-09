import { keyframes } from "styled-components";

export function bounceOutDown() {
  const bounceOutDown = keyframes`
	    20% {
            transform: translate3d(0, 10px, 0);
        }

        40%, 45% {
            opacity: 1;
            transform: translate3d(0, -20px, 0);
        }

        to {
            opacity: 0;
            transform: translate3d(0, 2000px, 0);
        }
	`;

  return bounceOutDown;
}
