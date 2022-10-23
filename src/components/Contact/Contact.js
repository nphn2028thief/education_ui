import classNames from 'classnames/bind';
import { UilPhone, UilEnvelope, UilLocationPoint } from '@iconscout/react-unicons';

import styles from './Contact.module.scss';
import contact from '~/assets/images/contact.svg';
import Social from '../Social';
import Button from '../Button';

const cx = classNames.bind(styles);

function Contact() {
    return (
        <section className={cx('wrapper')}>
            <div className={cx('container')}>
                <aside className={cx('aside')}>
                    <div className={cx('image')}>
                        <img src={contact} alt="contact-img" />
                    </div>
                    <h2 className={cx('aside-title')}>Contact Us</h2>
                    <p className={cx('aside-desc')}>
                        Asperirorés veniam vel doloribus assumenda soluta blanditiis dolores qui voluptades, consequatur
                        vitae.
                    </p>
                    <ul className={cx('info')}>
                        <li className={cx('info-item')}>
                            <UilPhone />
                            <h5 className={cx('text')}>0777498646</h5>
                        </li>

                        <li className={cx('info-item')}>
                            <UilEnvelope />
                            <h5 className={cx('text')}>nphn2082thief@gmail.com</h5>
                        </li>

                        <li className={cx('info-item')}>
                            <UilLocationPoint />
                            <h5 className={cx('text')}>DaNang, VietNam</h5>
                        </li>
                    </ul>

                    <Social className={cx('background-color')} />
                </aside>

                <form action="https://formspree.io/f/mbjbaydj" method="POST" className={cx('contact-form')}>
                    <div className={cx('name')}>
                        <input type="text" name="First Name" placeholder="First Name" required />
                        <input type="text" name="Last Name" placeholder="Last Name" required />
                    </div>

                    <input type="email" name="Email Address" placeholder="Your Email Address" required />

                    <textarea name="Message" rows="7" placeholder="Message"></textarea>

                    <Button type="submit" btn danger className={cx('send-btn')}>
                        Send Message
                    </Button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
