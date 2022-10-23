import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import header from '~/assets/images/header.svg';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('left')}>
                    <h1 className={cx('title')}>Grow your skills to advance your career path</h1>
                    <p className={cx('desc')}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quitsquam saepe animi, ad quis et atque
                        iste placeat minus ipsa rem?
                    </p>
                    <Button to="/courses" btn danger>
                        Get Started
                    </Button>
                </div>

                <div className={cx('right')}>
                    <div className={cx('image')}>
                        <img src={header} alt="header-img" />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
