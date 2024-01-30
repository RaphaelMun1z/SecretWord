import { useState, useRef } from 'react'
import styles from './Game.module.css'

const Game = ({ verifyLetter, pickedWord, pickedCategory, letters, guessedLetters, wrongLetters, guesses, score }) => {
    const [letter, setLetter] = useState("")
    const letterInputRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()

        verifyLetter(letter)
        setLetter("")

        letterInputRef.current.focus()
    }

    return (
        <section>
            <div className={styles.pointsContainer}>
                <p>Pontuação: </p>
                <h3><span>{score}</span></h3>
            </div>
            <div className={styles.numberContainer}>
                <p>Tentativas restantes: </p>
                <h3><span>{guesses}</span></h3>
            </div>
            <div className={styles.wordContainer}>
                {letters.map((letter, i) => (
                    guessedLetters.includes(letter) ? (
                        <span key={i} className={styles.letter}>{letter}</span>
                    ) : (
                        <span key={i} className={styles.noLetter}></span>
                    )
                ))}

            </div>
            <div className={styles.tipContainer}>
                <p>Dica:</p>
                <h3> <span>{pickedCategory}</span></h3>
            </div>
            <div className={styles.pickLetterContainer}>
                <p>Escolha uma letra</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="letter"
                        maxLength="1"
                        placeholder='Letra'
                        required
                        onChange={(e) => setLetter(e.target.value)}
                        value={letter}
                        ref={letterInputRef}
                    />
                    <button>Testar!</button>
                </form>
            </div>
            <div className={styles.wrongLettersContainer}>
                <p>Histórico de Letras</p>
                <div className={styles.lettersHistory}>
                    {wrongLetters.map((letter, i) => (
                        <span key={i}>{letter}</span>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Game