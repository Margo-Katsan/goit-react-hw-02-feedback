import css from "./Statistics.module.css"

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={css.wrapper}>
      <p className={css.name}>Good:<span className={css.number}>{good}</span></p>
      <p className={css.name}>Neutral:<span className={css.number}>{neutral}</span></p>
      <p className={css.name}>Bad:<span className={css.number}>{bad}</span></p>
      <p className={css.name}>Total:<span className={css.number}>{total}</span></p>
      <p className={css.name}>Positive feedback:<span className={css.number}>{positivePercentage}%</span></p>
    </div>
  );
}