import { keyframes }  from 'styled-components'


export function fadeOutLeft(){
	const fadeOutLeft = keyframes`
	    from {
			opacity: 1;
		}

		to {
			opacity: 0;
			transform: translate3d(-100%, 0, 0);
		}
	`;
	
	return fadeOutLeft;
}