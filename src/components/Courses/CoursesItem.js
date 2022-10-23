import classNames from 'classnames/bind';

import styles from './Courses.module.scss';
import Button from '../Button';

const cx = classNames.bind(styles);

function CourseItem({ data }) {
    return (
        <article className={cx('course-item')}>
            <div className={cx('image')}>
                <img src={data.thumbnail} alt="course-img" />
            </div>
            <div className={cx('info')}>
                <h4 className={cx('name')}>{data.name}</h4>
                <p className={cx('desc')}>
                    Lorem ipsum dolor sit amet consectetur adipsicing elit. Ratione vero alias expedita provident
                    temporibus fuga incidunt.
                </p>
                <Button to="/courses" btn danger className={cx('more-btn')}>
                    Learn More
                </Button>
            </div>
        </article>
    );
}

export default CourseItem;
