import s from './FeedBack.module.css';

const Notification = ({ message }) => <p className={s.message}>{message}</p>;

export { Notification };
