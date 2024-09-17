import React from 'react';
import { motion , AnimatePresence } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../../../Redux/DarkSlice';

import NightsStayIcon from '@mui/icons-material/NightsStay';
import LightModeIcon from '@mui/icons-material/LightMode';

import darkCSS from './dark_mode.module.css';

export default function DarkMode({color}) {

    // ====== dark-mode-active ====== //

    const {darkMode} = useSelector(store => store.darkMode);
    const dispatch = useDispatch();

    // ====== framer-motion ====== //

    const changeVariants = {

        hidden : {opacity : 0 , scale : 0.8 ,  transition : {duration : 0.3}},
        visible : {opacity : 1 , scale : 1 , transition : {duration : 0.3}}

    }

    return <React.Fragment>

        <button 
            className={darkCSS.dark_btn} 
            style={color ? {color : 'var(--toggle-color)'} : {}} 
            onClick={() => dispatch(toggleDarkMode())}
        >

            <AnimatePresence>

                {darkMode ? 
                    <motion.span 
                        className={darkCSS.mode_action} 
                        key={'l-m-b'} 
                        variants={changeVariants} initial='hidden' animate='visible'
                    >
                        <LightModeIcon />
                        <span className={darkCSS.label}>Light</span>
                    </motion.span> : 

                    <motion.span 
                        className={darkCSS.mode_action} 
                        key={'d-m-b'} 
                        variants={changeVariants} initial='hidden' animate='visible'
                    >
                        <NightsStayIcon />
                        <span className={darkCSS.label}>Dark</span>    
                    </motion.span>
                }

            </AnimatePresence>

        </button>

    </React.Fragment>

}