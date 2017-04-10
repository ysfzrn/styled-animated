I
was inspired by[ Animated.css](https://ysfzrn.github.io/styled-animated/)

#
# [Live Demo](https://ysfzrn.github.io/styled-animated/)
#
Actually, it doesn't make any difference with using css animations but composition is awesome, you can compose any animated elements maybe this can create a little difference.

#
# Installation

```
npm install styled-animated styled-components --save
```

# How to use it

### With Animated component

```jsx
import Animated, { zoomIn } from 'styled-animated'
...
<Animated animationFunction={zoomIn}>
    Styled-Animated
</Animated>
...
```

### Without Animated component

```jsx
import { zoomIn } from 'styled-animated'

...
<Rectangle>
   Styled-Animated
</Rectangle>
...

const Rectangle=styled.div`
   width:200px;
   height:200px;
   background-color:red;
   animation:${zoomIn} 1s ease-in;
`
```

###

### Animated Component Props

| props | default | explanation |
| :---: | :---: | :---: |
| animationFunction \(Required\) | - | Animation name. You can use any present effect like zoomIn, fadeIn, etc. |
| duration | 1 | Animation time |
| timingFunction | linear | You can use ease, linear, cubic-bezier |
| delay | 0 | A delay for the start of an animation. |
| iterationCount | finite | The number of times an animation should run. You use number or string like "finite" or "infinite" |
| direction | alternate | This is used to let animation run in reverse direction or alternate cycles |


