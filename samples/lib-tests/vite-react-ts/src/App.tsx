import React, { useEffect } from "react";

// import { runner } from 'compilerOptions-target'
import {runner} from 'compilerOptions-module'

console.log(runner)

export const App = () => {
  useEffect(() => {
    // runner()
  })


  return (
    <>
      Hello, Ts!
    </>
  )
}