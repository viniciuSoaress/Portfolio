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
        <p>Dev desde 2022</p>
        <p>link do <a href={user.html_url} target="_blank">GitHub</a> </p>

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