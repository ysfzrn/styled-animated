import { keyframes }  from 'styled-components'


export function fadeOutDown(){
	const fadeOutDown = keyframes`
	    from {
			opacity: 1;
		}

		to {
			opacity: 0;
			transform: translate3d(0, 100%, 0);
		}
	`;
	
	return fadeOutDown;
}