import React from 'react'

const Divisao = ({num1, num2}) => {

    const resultado = num1 / num2
  return (
    <div>O resultado de {num1} / {num2} é: {resultado}</div>
  )
}

export default Divisao