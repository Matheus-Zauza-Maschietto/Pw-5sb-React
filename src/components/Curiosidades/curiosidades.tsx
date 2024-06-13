import { CardSection } from "../CardSection/cardSection"
import style from "./curiosidades.module.css"

export function Curiosidades() {
    return (
        <CardSection title="Curiosidades">
            <ul className={style.ul}>
                <li>Squirtle é um dos Pokémon mais populares e adoráveis.</li>
                <li>
                    Seu nome deriva das palavras &quot;squirrel&quot; (esquilo) e &quot;turtle&quot;
                    (tartaruga).
                </li>
                <li>
                    Squirtle é frequentemente escolhido por treinadores para começar sua
                    jornada Pokémon.
                </li>
            </ul>
        </CardSection>
    )
}
