
import React from 'react'
import Adicao from './components/Adicao'
import Subtracao from './components/Subtracao'
import Multiplicacao from './components/Multiplicacao'
import Divisao from './components/Divisao'

const App = () => {


  return (
    <div><h1>Calculadora</h1>
      <h2><Adicao num1={2} num2={2}/></h2>
      <h2><Subtracao num1={2} num2={2}/></h2>
      <h2><Multiplicacao num1={2} num2={2}/></h2>
      <h2><Divisao num1={2} num2={2}/></h2>
    </div>
  )
}

export default App