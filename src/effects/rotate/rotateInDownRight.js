import { keyframes }  from 'styled-components'


export function rotateInDownRight(){
	const rotateInDownRight = keyframes`
	   from {
            transform-origin: right bottom;
            transform: rotate3d(0, 0, 1, 45deg);
            opacity: 0;
        }

        to {
            transform-origin: right bottom;
            transform: none;
            opacity: 1;
        }
	`;
	
	return rotateInDownRight;
}