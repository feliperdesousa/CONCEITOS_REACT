import { use, useState } from 'react'
import './App.css'
import Login from './paginas/Login'
import Cadastro from './paginas/Cadastro'
import Usuarios from './paginas/Usuarios'

function App() {

  const [tela, setTela] = useState('login')

  const renderizarTela = () => {
    if(tela === 'login') {
      return <Login navegar={trocarTela}/>
    } else if (tela === 'cadastro') {
      return <Cadastro navegar={trocarTela}/>
    } else if (tela === 'usuarios') {
      return <Usuarios/>
    }
  };

  const trocarTela = (pagina) => {
    setTela (pagina)
  };

  return (
    <>
      <h1>picachu</h1>

      <button onClick={() => trocarTela('login')}>login</button>
      <button onClick={() => trocarTela('cadastro')}>cadastro</button>
      <button onClick={() => trocarTela('usuarios')}>usuarios</button>

      <hr />

      {renderizarTela()}
    </>
  )
}

export default App
