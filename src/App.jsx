import { use, useState } from 'react'
import './App.css'
import Login from './paginas/Login'
import Cadastro from './paginas/Cadastro'

function App() {

  const [tela, setTela] = useState('login')

  const renderizarTela = () => {
    if(tela === 'login') {
      return <Login/>
    } else if (tela === 'cadastro') {
      return <Cadastro/>
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

      {renderizarTela()}
    </>
  )
}

export default App
