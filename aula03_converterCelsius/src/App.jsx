import React from 'react'
import CelsiusFahrenheit from './compoments/CelsiusFahrenheit'
import FahrenheitCelsius from './compoments/FahrenheitCelsius'
import QuilometrosParaMilhas from './compoments/QuilometrosParaMilhas'
import MilhasParaQuilometros from './compoments/MilhasParaQuilometros'

const App = () => {
  return (
    <div>
      <CelsiusFahrenheit fahrenheit={50}/>
      <FahrenheitCelsius celsius={50}/>
      <QuilometrosParaMilhas milhas={50}/>
      <MilhasParaQuilometros quilometros={50}/>
    </div>
    
  )
}

export default App