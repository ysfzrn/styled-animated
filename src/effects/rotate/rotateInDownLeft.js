import { keyframes }  from 'styled-components'


export function rotateInDownLeft(){
	const rotateInDownLeft = keyframes`
	   from {
            transform-origin: left bottom;
            transform: rotate3d(0, 0, 1, -45deg);
            opacity: 0;
        }

        to {
            transform-origin: left bottom;
            transform: none;
            opacity: 1;
        }
	`;
	
	return rotateInDownLeft;
}