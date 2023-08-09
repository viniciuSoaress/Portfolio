import { useState, useEffect } from "react";


const url = 'https://api.github.com/users/viniciuSoaress';

export type UserGithub = {
  name: string,
  avatar_url: string,
  html_url: string
}

export function useGithub() {

  const [user, setUser] = useState<UserGithub>({} as UserGithub)

 

  useEffect(() => {
    async function getUser() {
      const result = await fetch(url)
      setUser(await result.json())
    }

    getUser()
  }, [])


  return {
    user
  }
}