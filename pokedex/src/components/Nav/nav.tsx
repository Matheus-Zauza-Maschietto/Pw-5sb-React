import style from './nav.module.css'

export function Nav(){
    return (
        <nav>
            <ul className={style.ul}>
                <li className={style.li}><a className={style.a} href="#info-squirtle">Informações sobre Squirtle</a></li>
                <li className={style.li}><a className={style.a} href="#caracteristicas">Características</a></li>
                <li className={style.li}><a className={style.a} href="#curiosidades">Curiosidades</a></li>
                <li className={style.li}><a className={style.a} href="#artigo-squirtle">Artigo sobre Squirtle</a></li>
                <li className={style.li}><a className={style.a} href="#recursos">Recursos Adicionais</a></li>
                <li className={style.li}><a className={style.a} href="#evolucao">Evolução</a></li>
                <li className={style.li}><a className={style.a} href="./pages/todo/index.html">Todo List</a></li>
            </ul>
        </nav>
    )
}