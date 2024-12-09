import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import Nav from './components/Nav'
import HomePage from './components/Home'
import Learn from './components/Learn'
import Footer from './components/Footer'
import styles from './assets/css/FooterStyles.module.css'
import differentStyle from './assets/css/FooterStylesDif.module.css'



function App() {
  const location = useLocation(); 

  const hideFooterRoutes = [
    // '/moncess_app/classes'
  ];

  const isClassRoute = location.pathname === '/moncess_web/classes';
  const footerClass = isClassRoute ? differentStyle.footerContainer : styles.footerContainer;
  return (
    <>
      <Nav/>
        <Routes>
          <Route path='/moncess_web' element={<HomePage/>}/>
          <Route path='/moncess_web/classes' element={<Learn/>}/>
        </Routes>
        {/* Conditionally render Footer if the current route is not in the hideFooterRoutes array */}
        {!hideFooterRoutes.includes(location.pathname) && <Footer isClassRoute={isClassRoute} customClass={footerClass} />}
    </>
  )
}

export default App
