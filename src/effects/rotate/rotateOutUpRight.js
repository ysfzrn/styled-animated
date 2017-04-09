import { keyframes }  from 'styled-components'


export function rotateOutUpRight(){
	const rotateOutUpRight = keyframes`
	   from {
            transform-origin: right bottom;
            opacity: 1;
        }

        to {
            transform-origin: right bottom;
            transform: rotate3d(0, 0, 1, 90deg);
            opacity: 0;
        }
	`;
	
	return rotateOutUpRight;
}