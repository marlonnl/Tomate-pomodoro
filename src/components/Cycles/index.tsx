import styles from './styles.module.css'

export function Cycles() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.cycleDots}>
        <div className={styles.cycleDot} data-status="work"></div>
        <div className={styles.cycleDot} data-status="shortBreak"></div>
        <div className={styles.cycleDot} data-status="work"></div>
        <div className={styles.cycleDot} data-status="shortBreak"></div>
        <div className={styles.cycleDot} data-status="work"></div>
        <div className={styles.cycleDot} data-status="shortBreak"></div>
        <div className={styles.cycleDot} data-status="work"></div>
        <div className={styles.cycleDot} data-status="longBreak"></div>
      </div>
    </div>
  )
}
