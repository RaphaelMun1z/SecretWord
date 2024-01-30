import styles from './GameOver.module.css'

const GameOver = ({ retry, score }) => {
  return (
    <section>
      <h1 className={styles.title}>Fim de jogo!</h1>
      <h1 className={styles.points}>Pontuação: <span>{score}</span></h1>
      <button className={styles.buttonRetry} onClick={retry}>Jogar Novamente</button>
    </section>
  )
}

export default GameOver