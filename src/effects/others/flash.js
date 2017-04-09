import { keyframes }  from 'styled-components'


export function flash(){
	const flash = keyframes`
	   from, 50%, to {
            opacity: 1;
        }

        25%, 75% {
            opacity: 0;
        }
	`;
	
	return flash;
}