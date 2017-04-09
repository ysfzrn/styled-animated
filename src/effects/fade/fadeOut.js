import { keyframes }  from 'styled-components'


export function fadeOut(){
	const fadeOut = keyframes`
	   from {
				opacity: 1;
			}

			to {
				opacity: 0;
			}
	`;
	
	return fadeOut;
}