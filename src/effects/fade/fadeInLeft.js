import { keyframes }  from 'styled-components'


export function fadeInLeft(){
	const fadeInLeft = keyframes`
	from {
            opacity: 0;
            transform: translate3d(-100%, 0, 0);
      }

      to {
            opacity: 1;
            transform: none;
      }
	`;
	
	return fadeInLeft;
}