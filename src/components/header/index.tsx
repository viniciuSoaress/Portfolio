import s from './index.module.css'
import { UserGithub } from "../../hooks";

type userProps = {
  user: UserGithub
}

export function Header({ user }: userProps) {

  return (
    <header className={s.header}>
      <div>

        <h2>{user.name}</h2>
        <p><strong>Web Develope</strong> com</p>
        <h1>React.js</h1>
        <p>link de perfil do <a href={user.html_url} target="_blank">GitHub</a> </p>

      </div>
      <div className={s.div}>
        <img
          src={user.avatar_url}
          alt={user.name}
        />
      </div>
    </header>
  )
}