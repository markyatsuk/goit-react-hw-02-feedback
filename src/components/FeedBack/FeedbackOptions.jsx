import s from './FeedBack.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul className={s.buttonList}>
    {options.map(option => {
      return (
        <li key={option} className={s.button__item}>
          <button
            type="button"
            onClick={() => {
              onLeaveFeedback(option);
            }}
          >
            {option}
          </button>
        </li>
      );
    })}
  </ul>
);

export { FeedbackOptions };
