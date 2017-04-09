import { keyframes }  from 'styled-components'


export function slideInLeft(){
	const slideInLeft = keyframes`
	   from {
            transform: translate3d(-100%, 0, 0);
            visibility: visible;
        }

        to {
            transform: translate3d(0, 0, 0);
        }
	`;
	
	return slideInLeft;
}