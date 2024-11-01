import React from 'react'

const MilhasParaQuilometros = ({quilometros}) => {

    const milhas = quilometros * 0.621371;

  return (
    <div>
         <h1>A conversão de KM {quilometros} para milhas é: {milhas}</h1>
    </div>
  )
}

export default MilhasParaQuilometros