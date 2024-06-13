import { CardSection } from "../CardSection/cardSection"
import { InformacoesSquirtle } from "../InformacoesSquirtle/informacoesSquirtle"
import { Características } from "../Caracteristicas/caracteristicas"
import { Curiosidades } from "../Curiosidades/curiosidades"
import { SquirtleAmigo } from "../SquirtleAmigo/squirtleAmigo"
import { RecursosAdicionais } from "../RecursosAdicionais/recursosAdicionais"
import { Evolucoes } from "../Evolucoes/evolucoes"
import style from "./main.module.css"

export function Main() {
    return (
        <main className={style.main}>
            <InformacoesSquirtle></InformacoesSquirtle>
            <Características></Características>
            <Curiosidades></Curiosidades>
            <SquirtleAmigo></SquirtleAmigo>
            <RecursosAdicionais></RecursosAdicionais>
            <Evolucoes></Evolucoes>
        </main>
    )
}