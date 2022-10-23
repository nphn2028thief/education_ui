import { Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CoursesPage from './pages/CoursesPage';
import HomePage from './pages/HomePage';

function App() {
    return (
        <div className="App">
            <DefaultLayout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/courses" element={<CoursesPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
            </DefaultLayout>
        </div>
    );
}

export default App;
