import styles from '../assets/css/FooterStyles.module.css'
import differentStyle from '../assets/css/FooterStylesDif.module.css'
import logoDark from '../assets/images/moncessDark.png'
import logWhite from '../assets/images/moncessWhiteLogo.png'

const Footer = ({ isClassRoute, customClass }) => {

    const logo = isClassRoute ? logWhite : logoDark;


    return (
        <footer className={`row ${customClass}`} id='contact'>
            <div className={`col-lg-9 col-12 ${isClassRoute ? differentStyle.subContainer_2 : styles.subContainer}`} >
                <img src={logo} alt="Ondex" />
                {!isClassRoute && (
                    <p>
                        At Moncess, you can gain the essential practical skillset to become a competitive and highly qualified candidate in the IT industry, setting you apart in today's tech-driven world.
                    </p>
                )}
                <div className={`${isClassRoute ? differentStyle.footerLinks_2 : styles.footerLinks}`}>
                    <span>
                        <h2>Contact us: </h2><p>703.474.6342</p>
                    </span>
                    <span>
                        <h2>Email: </h2><p>moncessinfo@gmail.com</p>
                    </span>
                </div>
                <ul className={`list-unstyled list-inline ${isClassRoute ? differentStyle.socialsContainerDiff : styles.socialsContainer}`}>
                    <li className="list-inline-item">
                        <a href="https://www.instagram.com/" target='_blank'><i className="fab fa-instagram"></i></a>
                    </li>
                    <li className="list-inline-item">
                        <a href="https://www.facebook.com/" target='_blank'><i className="fab fa-facebook"></i></a>
                    </li>
                    <li className="list-inline-item">
                        <a href="https://www.linkedin.com/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                    </li>
                </ul>
                <span>&copy;2024 Moncess</span>
            </div>
        </footer>
    )
}

export default Footer;
