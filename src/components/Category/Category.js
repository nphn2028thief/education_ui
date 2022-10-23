import classNames from 'classnames/bind';
import styles from './Category.module.scss';
import { categories } from '~/data';
import CategoryItem from './CategoryItem';
import Button from '../Button';

const cx = classNames.bind(styles);

function Category() {
    return (
        <section className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('left')}>
                    <h1 className={cx('title')}>Categories</h1>
                    <p className={cx('desc')}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptatum ab in corporis quis
                        molestiae possimus vel temporibus error. Voluptatem cum harum ipsum facilis ducimus veritatis
                        optio, nihil qui provident.
                    </p>
                    <Button to="/" btn className={cx('more-btn')}>
                        Learn More
                    </Button>
                </div>

                <div className={cx('right')}>
                    {categories.map((item) => (
                        <CategoryItem key={item.id} data={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Category;
