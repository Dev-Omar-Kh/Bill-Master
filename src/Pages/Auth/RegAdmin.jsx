import React from 'react';

import logCSS from './auth.module.css';
import Logo from '../../Components/Logo/Logo';
import { motion } from 'framer-motion';
import DarkMode from '../../Components/Dark-Mode/DarkMode';
import { Link } from 'react-router-dom';

export default function RegAdmin() {

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

                <motion.div variants={childVariants} className={logCSS.input_cont + ' ' + logCSS.half}>

                    <div className={logCSS.loader}></div>

                    <label htmlFor="">Company name :</label>
                    <input type="text" placeholder='Enter the company name'/>

                </motion.div>

                <motion.div variants={childVariants} className={logCSS.input_cont + ' ' + logCSS.half}>

                    <div className={logCSS.loader}></div>

                    <label htmlFor="">Company email :</label>
                    <input type="text" placeholder='Enter the company email'/>

                </motion.div>

                <motion.div variants={childVariants} className={logCSS.input_cont + ' ' + logCSS.half}>

                    <div className={logCSS.loader}></div>

                    <label htmlFor="">Company phone :</label>
                    <input type="tel" placeholder='Enter the company phone'/>

                </motion.div>

                <motion.div variants={childVariants} className={logCSS.input_cont + ' ' + logCSS.half}>

                    <div className={logCSS.loader}></div>

                    <label htmlFor="">Company address :</label>
                    <input type="text" placeholder='Enter the company address'/>

                </motion.div>

                <motion.div variants={childVariants} className={logCSS.input_cont + ' ' + logCSS.half}>

                    <div className={logCSS.loader}></div>

                    <label htmlFor="">Password :</label>
                    <input type="password" placeholder='Create password'/>

                </motion.div>

                <motion.div variants={childVariants} className={logCSS.input_cont + ' ' + logCSS.half}>

                    <div className={logCSS.loader}></div>

                    <label htmlFor="">Confirm password :</label>
                    <input type="password" placeholder='Confirm the password'/>

                </motion.div>

                <motion.span className={logCSS.link} variants={childVariants}>
                    <Link to={'/logAdmin'}>Login as a company ?</Link>
                </motion.span>

                <motion.button variants={childVariants} whileTap={{scale : 0.95}} type='submit'>Submit</motion.button>

            </form>

        </motion.div>

    </React.Fragment>

}
