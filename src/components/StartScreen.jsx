// Style
import styles from './StartScreen.module.css'

const StartScreen = ({ startGame }) => {
    return (
        <section className={styles.container}>
            <h1>Secret Word</h1>
            <p>Clique no botão abaixo para iniciar o jogo.</p>
            <button onClick={startGame}>Iniciar Partida</button>
        </section>
    )
}

export default StartScreen