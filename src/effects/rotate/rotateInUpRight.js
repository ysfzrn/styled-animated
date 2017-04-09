import { keyframes }  from 'styled-components'


export function rotateInUpRight(){
	const rotateInUpRight = keyframes`
	   from {
            transform-origin: right bottom;
            transform: rotate3d(0, 0, 1, -90deg);
            opacity: 0;
        }

        to {
            transform-origin: right bottom;
            transform: none;
            opacity: 1;
        }
	`;
	
	return rotateInUpRight;
}