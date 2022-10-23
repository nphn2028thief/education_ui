import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { UilBars } from '@iconscout/react-unicons';

import styles from './MenuMobile.module.scss';
import Logo from '~/components/Logo';

const cx = classNames.bind(styles);

function MenuMobile() {
    const [width, setWidth] = useState(window.innerWidth);
    const inputRef = useRef();

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);

            if (width > 1023) {
                inputRef.current.checked = false;
            }
        };

        window.addEventListener('resize', handleResize);
    }, [width]);

    const handleClick = () => {
        inputRef.current.checked = false;
    };

    return (
        <>
            <label htmlFor={styles['navbar-mobile-input']} className={cx('menu-btn')}>
                <UilBars size="36" />
            </label>

            <input ref={inputRef} type="checkbox" id={cx('navbar-mobile-input')} />

            <label htmlFor={styles['navbar-mobile-input']} className={cx('overlay')}></label>

            <div className={cx('navbar__menu')}>
                {/* <label htmlFor={styles['navbar-mobile-input']} className={cx('close-btn')}>
                    <UilMultiply size="32" />
                </label> */}
                <Logo className={cx('menu-mobile-logo')} />

                <ul className={cx('menu-mobile')}>
                    <Link to="/" className={cx('menu-mobile-item')} onClick={handleClick}>
                        Home
                    </Link>

                    <Link to="/about" className={cx('menu-mobile-item')} onClick={handleClick}>
                        About
                    </Link>

                    <Link to="/courses" className={cx('menu-mobile-item')} onClick={handleClick}>
                        Courses
                    </Link>

                    <Link to="/contact" className={cx('menu-mobile-item')} onClick={handleClick}>
                        Contact
                    </Link>
                </ul>
            </div>
        </>
    );
}

export default MenuMobile;
