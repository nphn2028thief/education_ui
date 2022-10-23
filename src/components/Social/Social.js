import classNames from 'classnames/bind';
import { UilFacebookF, UilInstagram, UilTwitter, UilLinkedin } from '@iconscout/react-unicons';

import styles from './Social.module.scss';

const cx = classNames.bind(styles);

function Social({ className, contact = false }) {
    const classes = cx('socials', {
        [className]: className,
    });

    return (
        <ul className={classes}>
            <li className={cx('social-icon')}>
                <a
                    href="https://www.facebook.com/"
                    className={contact ? cx('social-icon-link', 'social-icon-color') : cx('social-icon-link')}
                    target="_blank"
                    rel="noreferrer"
                >
                    <UilFacebookF />
                </a>
            </li>

            <li className={cx('social-icon')}>
                <a
                    href="https://www.facebook.com/"
                    className={contact ? cx('social-icon-link', 'social-icon-color') : cx('social-icon-link')}
                    target="_blank"
                    rel="noreferrer"
                >
                    <UilInstagram />
                </a>
            </li>

            <li className={cx('social-icon')}>
                <a
                    href="https://www.facebook.com/"
                    className={contact ? cx('social-icon-link', 'social-icon-color') : cx('social-icon-link')}
                    target="_blank"
                    rel="noreferrer"
                >
                    <UilTwitter />
                </a>
            </li>

            <li className={cx('social-icon')}>
                <a
                    href="https://www.facebook.com/"
                    className={contact ? cx('social-icon-link', 'social-icon-color') : cx('social-icon-link')}
                    target="_blank"
                    rel="noreferrer"
                >
                    <UilLinkedin />
                </a>
            </li>
        </ul>
    );
}

export default Social;
