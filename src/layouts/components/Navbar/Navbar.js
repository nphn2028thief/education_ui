import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Navbar.module.scss';
import Logo from '~/components/Logo';
import MenuMobile from '~/components/MenuMobile';

const cx = classNames.bind(styles);

function Navbar() {
    const navRef = useRef();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                navRef.current.style.background = 'var(--primary-color)';
                navRef.current.style.boxShadow = '0 1.6rem 3.2rem rgba(0, 0, 0, 0.2)';
            } else {
                navRef.current.style.background = 'transparent';
                navRef.current.style.boxShadow = 'none';
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav ref={navRef} className={cx('wrapper')}>
            <div className={cx('container')}>
                <Logo />

                <ul className={cx('menu')}>
                    <Link to="/" className={cx('menu-item')}>
                        Home
                    </Link>

                    <Link to="/about" className={cx('menu-item')}>
                        About
                    </Link>

                    <Link to="/courses" className={cx('menu-item')}>
                        Courses
                    </Link>

                    <Link to="/contact" className={cx('menu-item')}>
                        Contact
                    </Link>
                </ul>

                <MenuMobile />
            </div>
        </nav>
    );
}

export default Navbar;
