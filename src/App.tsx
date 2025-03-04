import styles from "./app.module.css"

import { Input } from "./components/Input"
import { Button } from "./components/Button"
import { Tip } from "./components/Tip"
import { Letter } from "./components/Letter"
import { Header } from "./components/Header"
import { LettersUsed } from "./components/LettersUsed"

export default function App() {

    function handleRestartGame() {
        alert("Reiniciar o jogo!")
    }

    return (
        <div className={styles.container}>
            <main>
                <Header current={5} max={10} onRestart={handleRestartGame} />

                <Tip tip="Uma das linguagem de programação dinâmica" />

                <div className={styles.word}>
                    <Letter value="R"/>
                    <Letter value="E"/>
                    <Letter value="A"/>
                    <Letter value="C"/>
                    <Letter value="T"/>
                </div>

                <h4>Palpite</h4>
                <div className={styles.guess}>
                    <Input autoFocus maxLength={1} placeholder="?"/>
                    <Button title="Confirmar" />
                </div>

                <LettersUsed />
            </main>
        </div>
    )
}