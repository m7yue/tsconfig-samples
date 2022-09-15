import React, { useEffect } from "react";

// import { runner } from 'compilerOptions-target'
import { runner } from 'compilerOptions-module'

export const App = () => {
  useEffect(() => {
    runner()
  })


  return (
    <>
      Hello, Ts!
    </>
  )
}