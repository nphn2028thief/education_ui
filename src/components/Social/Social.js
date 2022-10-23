import classNames from 'classnames/bind';
import { UilFacebookF, UilInstagram, UilTwitter, UilLinkedin } from '@iconscout/react-unicons';

import styles from './Social.module.scss';

const cx = classNames.bind(styles);

function Social({ className }) {
    const classes = cx('social-icon', {
        [className]: className,
    });

    return (
        <ul className={cx('socials')}>
            <li className={classes}>
                <a href="https://www.facebook.com/" className={cx('social-icon-link')} target="_blank" rel="noreferrer">
                    <UilFacebookF />
                </a>
            </li>

            <li className={classes}>
                <a href="https://www.facebook.com/" className={cx('social-icon-link')} target="_blank" rel="noreferrer">
                    <UilInstagram />
                </a>
            </li>

            <li className={classes}>
                <a href="https://www.facebook.com/" className={cx('social-icon-link')} target="_blank" rel="noreferrer">
                    <UilTwitter />
                </a>
            </li>

            <li className={classes}>
                <a href="https://www.facebook.com/" className={cx('social-icon-link')} target="_blank" rel="noreferrer">
                    <UilLinkedin />
                </a>
            </li>
        </ul>
    );
}

export default Social;
