import style from "./cardSection.module.css"

export function CardSection({title, children}: {title: string, children: React.ReactNode}){
    return (
        <section className={style.section}>
            <h2>{title}</h2>
            {children}
        </section>
    )
}