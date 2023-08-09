import { useGithub } from './hooks/useGithub'
import { Header } from './components'

import './App.css'

export function App() {

  const { user } = useGithub()

  return (
    <>
      <Header user={user} />
      
    </>
  )
}
