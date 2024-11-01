import React from 'react'

const QuilometrosParaMilhas = ({milhas}) => {

    const quilometros = milhas / 0.621371;

  return (
    <div>
        <h1>A conversão de milhas {milhas} para KM é: {quilometros}</h1>
    </div>
  )
}

export default QuilometrosParaMilhas