import { keyframes }  from 'styled-components'


export function rotateOut(){
	const rotateOut = keyframes`
	   from {
            transform-origin: center;
            opacity: 1;
        }

        to {
            transform-origin: center;
            transform: rotate3d(0, 0, 1, 200deg);
            opacity: 0;
        }
	`;
	
	return rotateOut;
}