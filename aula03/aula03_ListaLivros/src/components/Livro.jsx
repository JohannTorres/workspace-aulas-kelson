import React from 'react'

const Livro = ({titulo, autor, ano}) => {

  return (
    <div>
        <h2>Titulo: {titulo}</h2>
        <h2>Autor: {autor}</h2>
        <h2>Ano: {ano}</h2>
        
    </div>
  )
}

export default Livro