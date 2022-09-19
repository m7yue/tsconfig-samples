import React from 'react'

import * as a from './module-a'

console.log(a)
   
const runner = () => {
  console.log(React)
}

export { runner }

export default () => {
  console.log('i‘m default!')
}