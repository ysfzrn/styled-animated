import { keyframes }  from 'styled-components'


export function slideInRight(){
	const slideInRight = keyframes`
	   from {
            transform: translate3d(100%, 0, 0);
            visibility: visible;
        }

        to {
            transform: translate3d(0, 0, 0);
        }
	`;
	
	return slideInRight;
}