import styles from "./app.module.css"

import { Tip } from "./components/Tip"
import { Letter } from "./components/Letter"
import { Header } from "./components/Header"

export default function App() {

    function handleRestartGame() {
        alert("Reiniciar o jogo!")
    }

    return (
        <div className={styles.container}>
            <main>
                <Header current={5} max={10} onRestart={handleRestartGame} />

                <Tip tip="Uma das linguagem de programação dinâmica" />

                <Letter value="R"/>
            </main>
        </div>
    )
}