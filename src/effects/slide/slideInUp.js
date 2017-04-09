import { keyframes }  from 'styled-components'


export function slideInUp(){
	const slideInUp = keyframes`
	   from {
            transform: translate3d(0, 100%, 0);
            visibility: visible;
        }

        to {
            transform: translate3d(0, 0, 0);
        }
	`;
	
	return slideInUp;
}