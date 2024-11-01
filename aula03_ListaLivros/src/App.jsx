import React from 'react'
import ListaDeLivros from './components/ListaDeLivros'

const App = () => {

    const livros = [
      {titulo: '1984', autor: 'George Orwell', ano: '1949'},
      {titulo: '1984', autor: 'George Orwell', ano: '1949'},
      {titulo: '1984', autor: 'George Orwell', ano: '1949'}
    ]
  return (
    <div>
      <h1>Lista de Livros</h1>
      <ListaDeLivros livros={livros}/>

    </div>
  )
}

export default App