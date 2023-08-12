import { nanoid } from 'nanoid'
import css from "./FeedbackOptions.module.css"

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.options}>
      {options.map(option => (
        <button key={nanoid()} className={css.option} onClick={() => {onLeaveFeedback(option)}}>{option}</button>
      ))}
    </div>
  );
}