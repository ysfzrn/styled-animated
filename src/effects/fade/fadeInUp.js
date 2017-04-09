import { keyframes }  from 'styled-components'


export function fadeInUp(){
	const fadeInUp = keyframes`
	from {
            opacity: 0;
            transform: translate3d(0, 100%, 0);
      }

      to {
            opacity: 1;
            transform: none;
      }
	`;
	
	return fadeInUp;
}