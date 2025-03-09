import styles from "./app.module.css"
import { useEffect, useState } from "react"

import { Challenge, WORDS } from "./utils/words"

import { Input } from "./components/Input"
import { Button } from "./components/Button"
import { Tip } from "./components/Tip"
import { Letter } from "./components/Letter"
import { Header } from "./components/Header"
import { LettersUsed, LettersUsedProps } from "./components/LettersUsed"

export default function App() {
    const [ letter, setLetter ] = useState("")
    const [ attempts, setAttempts ] = useState(0)
    const [ lettersUsed, setLettersUsed ] = useState<LettersUsedProps[]>([{
        value: "X", correct: true
    }])
    const [ challenge, setChallenge ] = useState<Challenge | null>(null)

    function handleRestartGame() {
        alert("Reiniciar o jogo!")
    }

    function startGame() {
        const index = Math.floor(Math.random() * WORDS.length)
        const randomWord = WORDS[index]

        setChallenge(randomWord)
        setAttempts(0)
        setLetter("")
    }

    useEffect(() => {
        startGame()
    }, [])

    if(!challenge) {
        return
    }

    return (
        <div className={styles.container}>
            <main>
                <Header current={attempts} max={10} onRestart={handleRestartGame} />

                <Tip tip="Uma das linguagem de programação dinâmica" />

                <div className={styles.word}>
                    {
                        challenge.word.split("").map(() => (
                            <Letter value="" />
                        ))
                    }
                </div>

                <h4>Palpite</h4>
                <div className={styles.guess}>
                    <Input autoFocus maxLength={1} placeholder="?"/>
                    <Button title="Confirmar" />
                </div>

                <LettersUsed data={lettersUsed}/>
            </main>
        </div>
    )
}