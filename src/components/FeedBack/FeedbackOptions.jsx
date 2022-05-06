import s from './FeedBack.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul className={s.buttonList}>
    {options.map(option => (
      <li key={option} className={s.button__item}>
        <button className={s.option} onClick={onLeaveFeedback}>
          {option}
        </button>
      </li>
    ))}
  </ul>
);

export { FeedbackOptions };
