import { Projetos } from "../../hooks";
import s from './index.module.css'

type SectionProps = {
  projetos: Projetos[],
}

export function Section({ projetos }: SectionProps) {

  return (
    <>

      <h2>Projetos de Estudo</h2>
      <section className={s.section}>
        {
          projetos.map(proj => (
            <div key={proj.id} className={s.card}>

              <h3>{proj.name}</h3>

              <p>{proj.description}</p>

              <div className={s.link}>

                <a href={proj.html_url} target="_blank">github</a>
                <br />
                {
                  proj.homepage !== null && (<a href={proj.homepage} target="_blank">link</a>)
                }

              </div>

            </div>
          ))
        }
      </section>
    </>
  )
}