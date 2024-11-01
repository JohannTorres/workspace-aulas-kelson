import React from 'react'

const FahrenheitCelsius = ({celsius}) => {

    const fahrenheit = (celsius * 9/5) + 32;

  return (
    <div><h1>A conversão de Celsius {celsius} para Fahrenheit é: {fahrenheit}</h1></div>
  )
}

export default FahrenheitCelsius