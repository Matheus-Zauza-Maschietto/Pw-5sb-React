import style from "./footer.module.css"

export function Footer() {
    return (
        <footer className={style.footer}>
            <p aria-label="Copyright">
                © 2024 Página do Pokémon Squirtle. Todos os direitos reservados.
            </p>
            <p><a href="#header">Voltar para o topo</a></p>
            <p><a href="mailto:contato@squirtlepage.com">Contato via e-mail</a></p>
            <p><a href="tel:+5555555555">Telefone: (55) 5555-5555</a></p>
            <p>Esta página foi visitada 2 vezes. A última visita foi: 13/06/2024, 19:37</p>
        </footer>
    )
}