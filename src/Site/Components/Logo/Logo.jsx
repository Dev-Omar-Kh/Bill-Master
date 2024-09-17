import React from 'react';

import logoCSS from '../Header/header.module.css';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';

export default function Logo({height , toggle , goTo}) {

    // ====== dark-mode-check ====== //

    const {darkMode} = useSelector(store => store.darkMode);

    // ====== framer-motion ====== //

    const imageVariants = {

        hidden : {opacity : 0 , scale : 0.8 ,  transition : {duration : 0.3}},
        visible : {opacity : 1 , scale : 1 , transition : {duration : 0.3}}

    }

    return <React.Fragment>

        <div className={logoCSS.logo}>

            <Link to={goTo}>
                <AnimatePresence>
                    {darkMode 
                        ? <motion.img 
                            key={'logo-light'}
                            style={height ? {height} : {}}
                            variants={imageVariants} initial='hidden' animate='visible'
                            src={require(toggle ? '../../Images/logo.png' :'../../Images/logo-light.png')} alt="logo" 
                        />
                        : <motion.img 
                            key={'logo-dark'}
                            style={height ? {height} : {}}
                            variants={imageVariants} initial='hidden' animate='visible'
                            src={require(toggle ? '../../Images/logo-light.png' : '../../Images/logo.png')} alt="logo" 
                        />
                    }
                </AnimatePresence>
            </Link>

        </div>

    </React.Fragment>

}
