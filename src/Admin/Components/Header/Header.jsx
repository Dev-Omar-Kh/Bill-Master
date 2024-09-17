import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDarkMode } from '../../../Redux/DarkSlice';
import {AnimatePresence, motion} from 'framer-motion';

import ListRoundedIcon from '@mui/icons-material/ListRounded';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import LightModeIcon from '@mui/icons-material/LightMode';

import headerCSS from './header.module.css';
import Search from './Search';


export default function Header({reDisplay}) {

    // ====== dark-mode-active ====== //

    const {darkMode} = useSelector(store => store.darkMode);
    const dispatch = useDispatch();

    // ====== framer-motion ====== //

    const changeVariants = {

        hidden : {opacity : 0 , scale : 0.8 ,  transition : {duration : 0.3}},
        visible : {opacity : 1 , scale : 1 , transition : {duration : 0.3}}

    }

    return <React.Fragment>

        <div className={headerCSS.container}>

            {/* <button onClick={() => reDisplay(true)}>display</button> */}

            <motion.span whileTap={{scale : 0.8}} onClick={() => reDisplay(true)} className={headerCSS.nav_ph}>
                <ListRoundedIcon />
            </motion.span>

            <div className={headerCSS.search}>
                <Search />
            </div>

            <div className={headerCSS.dark_mode}>

                <button 
                    className={headerCSS.dark_mode}
                    onClick={() => dispatch(toggleDarkMode())}
                >

                    <AnimatePresence>

                        {darkMode ?
                            <motion.span
                                key={'l-m-b'} 
                                variants={changeVariants} initial='hidden' animate='visible'
                            >
                                <LightModeIcon />
                                <p>Light</p>
                            </motion.span> :

                            <motion.span
                                key={'d-m-b'} 
                                variants={changeVariants} initial='hidden' animate='visible'
                            >
                                <NightsStayIcon />
                                <p>Dark</p>
                            </motion.span>
                        }

                    </AnimatePresence>

                </button>

            </div>

        </div>

    </React.Fragment>

}
