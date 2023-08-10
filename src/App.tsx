import { useGithub, useProjetos } from './hooks'
import { Header, Section } from './components'

import './App.css'

export function App() {

  const { user } = useGithub()
  const { projetos } = useProjetos()

  return (
    <>
      <Header user={user} />
      <Section  projetos={projetos}/>
    </>
  )
}
