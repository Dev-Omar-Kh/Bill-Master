import React from 'react';
import {motion} from 'framer-motion'

import BlurOnIcon from '@mui/icons-material/BlurOn';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import searchCSS from './search.module.css';

export default function Search({close}) {

    // ====== framer-motion //

    const parentVariants = {

        hidden : {opacity : 0},
        visible : {opacity : 1 , transition : {duration : 0.2 , staggerChildren: 0.3}},
        exit : {opacity : 0 , transition : {duration : 0.2, when : 'afterChildren'}},

    }

    const childVariants = {

        hidden : {y : 20 , opacity : 0},
        visible : {y : 0 , opacity : 1 , transition : {duration : 0.2}},
        exit : {y : 20 , opacity : 0 , transition : {duration : 0.2}},

    }

    // ====== jsx-code ====== //

    return <React.Fragment>

        <motion.div variants={parentVariants} initial='hidden' animate='visible' exit='exit' className={searchCSS.container}>

            <motion.div onClick={() => close(false)} variants={parentVariants} whileTap={{scale : 0.9}} className={searchCSS.close}>
                <HighlightOffIcon />
            </motion.div>

            <motion.h3 variants={childVariants}><span><BlurOnIcon /></span> Search <span><BlurOnIcon /></span></motion.h3>

            <form className={searchCSS.form}>

                <motion.div variants={childVariants} className={searchCSS.input_cont}>

                    <div className={searchCSS.loader}></div>

                    <input type="text" placeholder='Search for a bill'/>

                </motion.div>

                <motion.button whileTap={{scale : 0.95}} variants={childVariants} type='submit'>Search</motion.button>

            </form>

        </motion.div>

    </React.Fragment>

}
