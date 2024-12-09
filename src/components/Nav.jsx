import { useEffect, useState } from 'react';
import styles from '../assets/css/NavStyles.module.css';
import { Link } from 'react-router-dom';
import logo from '../assets/images/moncessWhiteLogo.png';
import logoDark from '../assets/images/moncessDark.png';

const Nav = () => {
    const [navBgGradient, setNavBgGradient] = useState('radial-gradient(circle, rgba(0, 204, 118, 0.5) 20%, #00D070 100%)'); 
    const [isLightBackground, setIsLightBackground] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const section1Height = document.querySelector('.section1')?.offsetHeight || 0;

            if (scrollPosition < section1Height) {
                setNavBgGradient('radial-gradient(circle, rgba(0, 204, 118, 0.5) 20%, #00D070 100%)'); 
                setIsLightBackground(false);
            } else {
                setNavBgGradient('radial-gradient(circle, rgba(245, 245, 245, 0.5) 20%, rgba(255, 255, 255, 0.2) 100%)'); 
                setIsLightBackground(true); 
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`container-fluid ${styles.navBarContainer}`} style={{ background: navBgGradient }}>
            <nav className="navbar navbar-expand-lg sticky-top" style={{ padding: '0px' }} data-bs-ride="true">
                <div className={`container-fluid ${styles.navBar}`}>
                    {/* Logo */}
                    <a href="/moncess_web">
                        <span className={`${styles.sbLogo}`}>
                            <img src={isLightBackground ? logoDark : logo} alt="Moncess" />
                        </span>
                    </a>

                    {/* Navbar Toggler for smaller screens */}
                    <button className={`navbar-toggler ${styles.navbarToggle}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navbar Content */}
                    <div className={`collapse navbar-collapse ${styles.linkContainer} ${isLightBackground ? styles.lightLinks : ''}`} id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a href="/moncess_web" className="nav-link active" >Home</a>
                            </li>
                            <li className="nav-item">
                                <Link to='/moncess_web/classes' className="nav-link">Learn</Link>
                            </li>
                            <li className="nav-item">
                                <a href="#contact" className="nav-link">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Nav;

