import { useState } from 'react' ;

//criando componente react 
function Home() {
    return(
        <div>
            <h1>Home</h1>
            <Contador />
        </div>    
    )
}

function Contador() {
    const [contador, setContador] = useState(1);

    function adicionarContador() {
        setContador(contador + 1);
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}
//Novo padrão de módulo do javascript 
//Escolhendo qual componente renderizar 
export default Home
