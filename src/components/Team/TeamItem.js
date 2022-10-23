import classNames from 'classnames/bind';
import { UilInstagram, UilTwitter, UilLinkedin } from '@iconscout/react-unicons';

import styles from './Team.module.scss';

const cx = classNames.bind(styles);

function TeamItem({ data }) {
    return (
        <article className={cx('team-item')}>
            <div className={cx('image-container')}>
                <img src={data.image} alt="team-member" className={cx('image')} />
            </div>

            <div className={cx('info')}>
                <h4 className={cx('name')}>{data.name}</h4>
                <p className={cx('career')}>{data.career}</p>
            </div>

            <div className={cx('socials')}>
                <a href="https://www.instagram.com/" className={cx('social-icon')} target="_blank" rel="noreferrer">
                    <UilInstagram />
                </a>
                <a href="https://www.twitter.com/" className={cx('social-icon')} target="_blank" rel="noreferrer">
                    <UilTwitter />
                </a>
                <a href="https://www.linkedin.com/" className={cx('social-icon')} target="_blank" rel="noreferrer">
                    <UilLinkedin />
                </a>
            </div>
        </article>
    );
}

export default TeamItem;
