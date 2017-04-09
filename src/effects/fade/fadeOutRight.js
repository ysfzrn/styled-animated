import { keyframes }  from 'styled-components'


export function fadeOutRight(){
	const fadeOutRight = keyframes`
	    from {
			opacity: 1;
		}

		to {
			opacity: 0;
			transform: translate3d(100%, 0, 0);
		}
	`;
	
	return fadeOutRight;
}