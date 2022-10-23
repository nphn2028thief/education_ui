import { useState } from 'react';
import classNames from 'classnames/bind';
import { UilPlus, UilMinus } from '@iconscout/react-unicons';

import styles from './Question.module.scss';
import { questions } from '~/data';

const cx = classNames.bind(styles);

function Question() {
    const [show, setShow] = useState(null);

    const handleClick = (id) => {
        if (show === id) {
            return setShow(null);
        }

        setShow(id);
    };

    return (
        <section className={cx('wrapper')}>
            <h2 className={cx('title')}>Frequently Asked Questions</h2>

            <div className={cx('container')}>
                {questions.map((item) => (
                    <article key={item.id} className={cx('question-item')} onClick={() => handleClick(item.id)}>
                        <div className={cx('icon')}>
                            {show === item.id ? <UilMinus size="20" /> : <UilPlus size="20" />}
                        </div>
                        <div className={cx('answer')}>
                            <h4 className={cx('name')}>{item.name}</h4>
                            <p className={show === item.id ? cx('reply', 'active') : cx('reply')}>{item.reply}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Question;
