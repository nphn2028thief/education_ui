import classNames from 'classnames/bind';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';

import { testimonials } from '~/data';
import styles from './Testimonial.module.scss';

const cx = classNames.bind(styles);

function Testimonial() {
    return (
        <section className={cx('wrapper')}>
            <h2 className={cx('title')}>Student's Testimonials</h2>
            <div className={cx('container')}>
                <Swiper
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 12,
                        },
                        740: {
                            slidesPerView: 2,
                            spaceBetween: 16,
                        },
                    }}
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <article className={cx('testimonial')}>
                                <div className={cx('avatar')}>
                                    <img src={testimonial.avatar} alt="student-avatar" />
                                </div>

                                <div className={cx('info')}>
                                    <h5 className={cx('name')}>{testimonial.name}</h5>
                                    <small className={cx('career')}>{testimonial.career}</small>
                                </div>

                                <div className={cx('body')}>
                                    <p className={cx('content')}>
                                        Lorem ipsum dolor, sit amet consectetur adipsicing elit. Sequi corporis
                                        officilis sint dolore amet voluptatibus perspiciatis animi facere? Sed, rerum.
                                        Rem eveniet aut illo!
                                    </p>
                                </div>
                            </article>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

export default Testimonial;
