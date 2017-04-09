import { keyframes }  from 'styled-components'


export function rotateIn(){
	const rotateIn = keyframes`
	   from {
            transform-origin: center;
            transform: rotate3d(0, 0, 1, -200deg);
            opacity: 0;
        }

        to {
            transform-origin: center;
            transform: none;
            opacity: 1;
        }
	`;
	
	return rotateIn;
}