import { keyframes }  from 'styled-components'


export function fadeIn(){
	const fadeIn = keyframes`
	  from {
	    opacity: 0;
	  }

	  to {
	    opacity: 1;
	  }
	`;
	
	return fadeIn;
}