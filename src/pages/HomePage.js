import Category from '~/components/Category';
import Courses from '~/components/Courses';
import Question from '~/components/Question';
import Testimonial from '~/components/Testimonial';
import Header from '~/layouts/components/Header';

function HomePage() {
    return (
        <>
            <Header />
            <Category />
            <Courses title />
            <Question />
            <Testimonial />
        </>
    );
}

export default HomePage;
