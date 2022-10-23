import classNames from 'classnames/bind';
import styles from './Team.module.scss';
import TeamItem from './TeamItem';
import { teamMembers } from '~/data';

const cx = classNames.bind(styles);

function Team() {
    return (
        <section className={cx('wrapper')}>
            <h2 className={cx('title')}>Meet Our Team</h2>
            <div className={cx('container')}>
                {teamMembers.map((teamMember) => (
                    <TeamItem key={teamMember.id} data={teamMember} />
                ))}
            </div>
        </section>
    );
}

export default Team;
