import { keyframes }  from 'styled-components'


export function fadeOutUp(){
	const fadeOutUp = keyframes`
	    from {
			opacity: 1;
		}

		to {
			opacity: 0;
			transform: translate3d(0, -100%, 0);
		}
	`;
	
	return fadeOutUp;
}