import { keyframes }  from 'styled-components'


export function zoomOut(){
	const zoomOut = keyframes`
	   from {
            opacity: 1;
        }

        50% {
            opacity: 0;
            transform: scale3d(.3, .3, .3);
        }

        to {
            opacity: 0;
        }
	`;
	
	return zoomOut;
}