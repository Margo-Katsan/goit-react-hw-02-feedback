import css from "./FeedbackOptions.module.css"

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.options}>
      <button className={css.option} onClick={() => {onLeaveFeedback(options[0])}}>{options[0]}</button>
      <button className={css.option} onClick={() => {onLeaveFeedback(options[1])}}>{options[1]}</button>
      <button className={css.option} onClick={() => {onLeaveFeedback(options[2])}}>{options[2]}</button>
    </div>
  );
}