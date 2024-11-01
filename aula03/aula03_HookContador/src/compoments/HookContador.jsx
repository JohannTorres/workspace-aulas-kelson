import React from 'react'
import { useState } from 'react'

const HookContador = () => {

    const [contador, setContador] = useState(1)

    function incrementarContador (){
        setContador(contador+1)
    }

    function decrementarContador (){
        setContador(contador-1)
    }
  return (
    <div>
        <h1>Exemplo de Hook Contador</h1>
        <h2>O Contador está em: {contador}</h2>
        <button onClick ={incrementarContador}>Incrementar +</button>
        <button onClick ={decrementarContador}>Incrementar -</button>
    </div>
  )
}

export default HookContador