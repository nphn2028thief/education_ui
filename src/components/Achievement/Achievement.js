import classNames from 'classnames/bind';

import aboutAchievements from '~/assets/images/aboutAchievements.svg';
import styles from './Achievement.module.scss';
import AchievementItem from './AchievementItem';
import { achievements } from '~/data';

const cx = classNames.bind(styles);

function Achievement() {
    return (
        <section className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('left')}>
                    <img src={aboutAchievements} alt="achievement-img" />
                </div>

                <div className={cx('right')}>
                    <h1 className={cx('title')}>Achievements</h1>
                    <p className={cx('desc')}>
                        Lorem ipsum dolor sit amet consectetur adipsicing elit. Earum ullam velit, assumenda, obcaecati
                        molestiae voluptatem placeat alias iste ad modi sunt quidem veniam recusandae possimus
                        consequuntur quisquam soluta vero sapiente.
                    </p>
                    <div className={cx('cards')}>
                        {achievements.map((achievement) => (
                            <AchievementItem key={achievement.id} data={achievement} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Achievement;
