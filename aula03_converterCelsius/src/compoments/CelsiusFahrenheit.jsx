import React from 'react'

const CelsiusFahrenheit = ({fahrenheit}) => {

    const celsius = (fahrenheit - 32) * 5/9;

  return (
    <div><h1>A conversão de Fahrenheit {fahrenheit} para celsius é: {celsius}</h1></div>
  )
}

export default CelsiusFahrenheit