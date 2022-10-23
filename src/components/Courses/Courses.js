import classNames from 'classnames/bind';

import HomeCourseItem from './CoursesItem';
import styles from './Courses.module.scss';
import { courses, popularCourses } from '~/data';

const cx = classNames.bind(styles);

function Courses({ title = false, custom = false }) {
    return (
        <section className={cx('wrapper', { custom })}>
            {title && <h2 className={cx('title')}>Our Popular Courses</h2>}
            <div className={cx('container')}>
                {title &&
                    popularCourses.map((popularCourse) => (
                        <HomeCourseItem key={popularCourse.id} data={popularCourse} />
                    ))}
                {title === false && courses.map((course) => <HomeCourseItem key={course.id} data={course} />)}
            </div>
        </section>
    );
}

export default Courses;
