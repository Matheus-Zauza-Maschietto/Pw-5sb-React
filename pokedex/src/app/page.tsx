import { Header } from "@/components/Header/header";
import { Main } from "@/components/Main/main"
import { Nav } from "@/components/Nav/nav";
import { Footer } from "@/components/Footer/footer";
import style from "./page.module.css"

export default function Home() {
    return (
        <body className={style.body}>
            <Header title="Squirtle"></Header>
            <Nav></Nav>
            <Main></Main>
            <Footer></Footer>
        </body>
    );
}
