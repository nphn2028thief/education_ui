import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import Logo from '~/components/Logo';
import styles from './Footer.module.scss';
import Social from '~/components/Social';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('footer-item')}>
                    <Logo />
                    <p className={cx('desc')}>
                        Lorem ipsum dolor sit amet consectetur adipsicing elit. Corporis ipsum nobis ratione.
                    </p>
                </div>

                <div className={cx('footer-item')}>
                    <h4 className={cx('title')}>Permalinks</h4>
                    <ul className={cx('permalinks')}>
                        <li className={cx('permalink-item')}>
                            <Link to="/" className={cx('permalink-item-link')}>
                                Home
                            </Link>
                        </li>

                        <li className={cx('permalink-item')}>
                            <Link to="/about" className={cx('permalink-item-link')}>
                                About
                            </Link>
                        </li>

                        <li className={cx('permalink-item')}>
                            <Link to="/courses" className={cx('permalink-item-link')}>
                                Courses
                            </Link>
                        </li>

                        <li className={cx('permalink-item')}>
                            <Link to="/contact" className={cx('permalink-item-link')}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className={cx('footer-item')}>
                    <h4 className={cx('title')}>Privacy</h4>
                    <ul className={cx('permalinks')}>
                        <li className={cx('permalink-item')}>
                            <Link to="/policy" className={cx('permalink-item-link')}>
                                Privacy Policy
                            </Link>
                        </li>

                        <li className={cx('permalink-item')}>
                            <Link to="/terms" className={cx('permalink-item-link')}>
                                Terms and Condition
                            </Link>
                        </li>

                        <li className={cx('permalink-item')}>
                            <Link to="/refund" className={cx('permalink-item-link')}>
                                Refund Policy
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className={cx('footer-item')}>
                    <h4 className={cx('title')}>Contact Us</h4>
                    <div className={cx('contact-info')}>
                        <p className={cx('info-text')}>+01 234 567 8910</p>
                        <p className={cx('info-text')}>nphn2082thief@gmail.com</p>
                    </div>

                    <Social className={cx('social-footer')} />
                </div>
            </div>
        </footer>
    );
}

export default Footer;
