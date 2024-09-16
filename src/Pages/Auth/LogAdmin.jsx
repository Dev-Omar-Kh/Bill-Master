import React from 'react';

import logCSS from './auth.module.css';
import Logo from '../../Components/Logo/Logo';
import { motion } from 'framer-motion';
import DarkMode from '../../Components/Dark-Mode/DarkMode';
import { Link } from 'react-router-dom';

export default function LogAdmin() {

    // ====== framer-motion ====== //

    const parentVariants = {

        hidden : {opacity : 0},
        visible : {opacity : 1 , transition : {duration : 0.3 , when : 'beforeChildren' , staggerChildren: 0.3}}

    }

    const childVariants = {

        hidden : {y : 20 , opacity : 0},
        visible : {y : 0 , opacity : 1 , transition : {duration : 0.2}},
        exit : {y : 20 , opacity : 0 , transition : {duration : 0.2}},

    }

    return <React.Fragment>

        <motion.div variants={parentVariants} initial='hidden' animate='visible' className={logCSS.container}>

            <div className={logCSS.dark_mode}>
                <DarkMode />
            </div>

            <Logo height={60} />

            <form className={logCSS.form}>

                <motion.div variants={childVariants} className={logCSS.input_cont}>

                    <div className={logCSS.loader}></div>

                    <label htmlFor="">Company email :</label>
                    <input type="email" placeholder='Enter company email'/>

                </motion.div>

                <motion.div variants={childVariants} className={logCSS.input_cont}>

                    <div className={logCSS.loader}></div>

                    <label htmlFor="">Company password :</label>
                    <input type="password" placeholder='Enter the password'/>

                </motion.div>

                <motion.span className={logCSS.link} variants={childVariants}>
                    <Link to={'/regAdmin'}>Register as a company ?</Link>
                </motion.span>

                <motion.button variants={childVariants} whileTap={{scale : 0.95}} type='submit'>Submit</motion.button>

            </form>

        </motion.div>

    </React.Fragment>

}
