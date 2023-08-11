import { useGithub, useProjetos } from './hooks'
import { Header, Section, Sobre } from './components'

import './App.css'
import { useState } from 'react'

export function App() {

  const [is, setIs] = useState('tipyng')

  const { user } = useGithub()
  const { projetos } = useProjetos()

  return (
    <>
      <nav className='nav'>
        <button onClick={() => setIs('sobre')}>Sobre</button>
        <button onClick={() => setIs('projetos')}>Projeto</button>
        <button onClick={() => setIs('contatos')}>Contato</button>
        
      </nav>
      <Header user={user} />

      {is === 'sobre' && <Sobre />}

      {is === 'projetos' && <Section projetos={projetos} />}
    </>
  )
}
