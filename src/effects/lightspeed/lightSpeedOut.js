import { keyframes }  from 'styled-components'


export function lightSpeedOut(){
	const lightSpeedOut = keyframes`
	   from {
            opacity: 1;
        }

        to {
            transform: translate3d(100%, 0, 0) skewX(30deg);
            opacity: 0;
        }
	`;
	
	return lightSpeedOut;
}