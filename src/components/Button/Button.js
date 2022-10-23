import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    children,
    className,
    to,
    btn = false,
    success = false,
    warning = false,
    danger = false,
    onClick,
    type,
}) {
    let Component = 'button';
    const _props = {
        onClick,
    };

    if (type) {
        _props.type = type;
    }

    if (to) {
        _props.to = to;
        Component = Link;
    }

    const classes = cx('wrapper', {
        [className]: className,
        btn,
        success,
        warning,
        danger,
    });

    return (
        <Component className={classes} {..._props}>
            <span className={cx('title')}>{children}</span>
        </Component>
    );
}

export default Button;
