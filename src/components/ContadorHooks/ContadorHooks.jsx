import React, { useRef } from 'react'; // Hook adicional
import { useContador } from './useContador'; // Custom Hook

const ContadorHooks = ({ initialValue }) => {
  // variable y función (acción)
  const [ contador, setContador ] = useContador(initialValue);

  const buttonRef = useRef(null); 

  // Action
  const restarUno = () => {
    // variableRed.current. lo que quieras cambiar 
    buttonRef.current.style.backgroundColor = 'red';
    setContador(contador - 1);

  }

  return (
    <div>
      <p>Contador con valor inicial en: {initialValue}</p>
      <div>
        {/* "ref" toma el hook useRef*/}
        <button ref={buttonRef} onClick={() => restarUno()}>Restar 1</button>
        {/* en onClick va la acción(función del Hook useState o custom hook) */}
        <button onClick={() => setContador(contador + 1)}>Sumar 1</button>
        <p>Valor actual: {contador}</p>
      </div>
    </div>
  )
}

export default ContadorHooks //