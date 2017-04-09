import { keyframes }  from 'styled-components'


export function rotateOutDownRight(){
	const rotateOutDownRight = keyframes`
	   from {
            transform-origin: right bottom;
            opacity: 1;
        }

        to {
            transform-origin: right bottom;
            transform: rotate3d(0, 0, 1, -45deg);
            opacity: 0;
        }
	`;
	
	return rotateOutDownRight;
}