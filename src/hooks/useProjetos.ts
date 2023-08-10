import { useState, useEffect } from "react";

export type Projetos = {
  name: string,
  id: number,
  html_url: string,
  description: string,
  homepage: string,
}

const url = 'https://api.github.com/users/viniciuSoaress/repos'

export function useProjetos() {

  const [projetos, setProjetos] = useState<Projetos[]>([])

  useEffect(() => {
    async function getProjetos(){
      const result = await fetch(url)
      setProjetos(await result.json())
    }
    getProjetos()
  }, [])

  return {
    projetos
  }
}