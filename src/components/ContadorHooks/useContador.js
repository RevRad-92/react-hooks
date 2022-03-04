import { useEffect, useState } from 'react';

export const useContador = (initialValue) => {
    const [ contador, setContador ] = useState(initialValue);
    
    useEffect(() => {
        //componentDidMount:
        console.log('useEffect en acción (componentDidMount)');
        //componentWillUnmount:
        return () => {
            console.log('Componente Contador Despontado (componentWillUnmount)');
        }
    }, []); 

    return [contador, setContador] // lo usa ContadorHooks.jsx
}

export default useContador