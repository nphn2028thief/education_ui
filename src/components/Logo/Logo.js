import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Logo.module.scss';

function Logo({ className }) {
    return (
        <Link to="/" className={classNames(styles.logo, className)}>
            EGATOR
        </Link>
    );
}

export default Logo;
