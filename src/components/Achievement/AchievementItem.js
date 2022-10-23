import classNames from 'classnames/bind';
import styles from './Achievement.module.scss';

const cx = classNames.bind(styles);

function AchievementItem({ data }) {
    return (
        <article className={cx('achievement-item')}>
            <span className={cx('icon')}>{data.icon}</span>
            <h3 className={cx('amount')}>{data.amount}</h3>
            <p className={cx('name')}>{data.name}</p>
        </article>
    );
}

export default AchievementItem;
