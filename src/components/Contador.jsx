import { useState } from 'react'

function Contador() {
  const [valor, setValor] = useState(0)
  //Cria um estado chamado valor que começa em 0,
//e uma função setValor que serve para alterar esse valor.

  return (
    <div>
      <h5>Contador</h5>

      <p>{valor}</p>

      <button onClick={() => setValor(valor + 1)}>+</button>
      <button onClick={() => setValor(valor - 1)}>-</button>
      <button onClick={() => setValor(0)}>Resetar</button>
    </div>
  )
}

export default Contador