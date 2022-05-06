import s from './FeedBack.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    <p className={s.statisticText}>
      Good:
      <span className={s.number}>{good}</span>
    </p>
    <p className={s.statisticText}>
      Neutral:
      <span className={s.number}>{neutral}</span>
    </p>
    <p className={s.statisticText}>
      Bad:
      <span className={s.number}>{bad}</span>
    </p>
    <p className={s.statisticText}>
      Total:
      <span className={s.number}>{total()}</span>
    </p>
    <p className={s.statisticText}>
      Positive feedback:
      <span className={s.number}>{positivePercentage()}</span>
    </p>
  </div>
);

export { Statistics };
