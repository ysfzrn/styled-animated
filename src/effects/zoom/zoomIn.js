import { keyframes }  from 'styled-components'


export function zoomIn(){
	const zoomIn = keyframes`
	   from {
            opacity: 0;
            transform: scale3d(.3, .3, .3);
        }

        50% {
            opacity: 1;
        }
	`;
	
	return zoomIn;
}