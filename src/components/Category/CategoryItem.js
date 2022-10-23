import classNames from 'classnames/bind';

import styles from './Category.module.scss';

const cx = classNames.bind(styles);

function CategoryItem({ data }) {
    return (
        <article className={cx('category-item')}>
            <span className={cx('icon')}>{data.icon}</span>
            <h5 className={cx('name')}>{data.title}</h5>
            <p className={cx('item-desc')}>Lorem ipsum dolor sit amet consectetur, elit, temporibus, qui.</p>
        </article>
    );
}

export default CategoryItem;
