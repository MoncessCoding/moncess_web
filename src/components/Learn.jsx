import React from 'react'
import styles from '../assets/css/LearnStyles.module.css'
import { Link } from 'react-router-dom'

const Learn = () => {
    return (
        <section className={`${styles.learnPageContainer} section1`}>
                <h1>Courses</h1>
            <div id='courses' className={`row ${styles.unitsContainer}`}>
                <div className={` ${styles.courseContainer}`}>
                    <div className={`col-lg-3 col-12 card ${styles.course}`}>
                        <div className={`${styles.headerContainer}`}>
                            <h5 className="card-title">Fundamentals</h5>
                        </div>
                        <div className={`card-body ${styles.buttonContainer}`}>
                            <Link to='#' className='btn'>Learn</Link>
                        </div>
                    </div>
                    <div className={`col-lg-3 col-12 card ${styles.course}`}>
                        <div className={`${styles.headerContainer}`}>
                            <h5 className="card-title">Full-Stack Python</h5>
                        </div>
                        <div className={`card-body ${styles.buttonContainer}`}>
                            <Link to='#' className='btn'>Learn</Link>
                        </div>
                    </div>
                    <div className={`col-lg-3 col-12 card ${styles.course}`}>
                        <div className={`${styles.headerContainer}`}>
                            <h5 className="card-title">Full-Stack MERN</h5>
                        </div>
                        <div className={`card-body ${styles.buttonContainer}`}>
                            <Link to='#' className='btn'>Learn</Link>
                        </div>
                    </div>
                    <div className={`col-lg-3 col-12 card ${styles.course}`} style={{'paddingRight' : '0'}}>
                        <div className={`${styles.headerContainer}`}>
                            <h5 className="card-title">Hands-on Projects & Portfolio Creation</h5>
                        </div>
                        <div className={`card-body ${styles.buttonContainer}`}>
                            <Link to='#' className='btn'>Learn</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Learn