import { CardSection } from "../CardSection/cardSection"
import style from "./recursosAdicionais.module.css"

export function RecursosAdicionais() {
    return (
        <CardSection title="Recursos Adicionais">
            <ul>
                <li className={style.li}>
                    <a href="https://www.pokemon.com/br/pokedex/squirtle" target="_blank">Pokédex - Squirtle</a>
                </li>
                <li className={style.li}>
                    <a href="https://bulbapedia.bulbagarden.net/wiki/Squirtle_(Pok%C3%A9mon)" target="_blank">Bulbapedia - Squirtle</a>
                </li>
            </ul>
        </CardSection>
    )
}
