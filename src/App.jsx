import { useState } from 'react'
import './App.css'
import Menssagem from './components/Menssagem'
import Frase from './components/Frase'
import Calculadora from './components/Calculadora'


function HelloWord() {
  return <p>HelloWord</p>
}

function App() {

  return (
    <>
      <HelloWord></HelloWord>
      <Menssagem texto="helloWord"></Menssagem>
      <Frase></Frase>
      <Calculadora/>
    </>
  )
}

export default App
