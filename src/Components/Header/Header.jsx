import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import NightsStayIcon from '@mui/icons-material/NightsStay';

import headerCSS from './header.module.css';
import './active.css';
import Search from './Search-Bar/Search';
import { AnimatePresence } from 'framer-motion';

export default function Header() {

    // ====== nav-for-phone ======

    useEffect(() => {

        const navPh = document.getElementById('nav_ph');
        const nav = document.getElementById('nav');
        const actions = document.getElementById('actions');

        const toggleNav = () => {

            navPh.classList.toggle(headerCSS.change);
            nav.classList.toggle(headerCSS.display_nav);
            actions.classList.toggle(headerCSS.display_actions);

        };

        const toggleActions = () => {

            navPh.classList.toggle(headerCSS.change);
            nav.classList.toggle(headerCSS.display_nav);
            actions.classList.toggle(headerCSS.display_actions);

        };

        navPh.addEventListener('click', toggleNav);
        nav.addEventListener('click', toggleNav);
        actions.addEventListener('click', toggleActions);

        return () => {
            navPh.removeEventListener('click', toggleNav);
            nav.removeEventListener('click', toggleNav);
            actions.removeEventListener('click', toggleActions);
        };

    } , []);

    // ====== search-bar-display ====== //

    const [displaySearch, setDisplaySearch] = useState(false);

    return<React.Fragment>

        <AnimatePresence>

            {displaySearch && <Search close={setDisplaySearch} />}

        </AnimatePresence>

        <header className={headerCSS.container}>

            <div className={headerCSS.logo}>

                <Link to={'/'}><img src={require('../../Images/logo.png')} alt="logo" /></Link>

            </div>

            <div id='nav_ph' className={headerCSS.nav_ph}>

                <span className={headerCSS.nav_span}></span>
                <span className={headerCSS.nav_span}></span>
                <span className={headerCSS.nav_span}></span>

            </div>

            <nav id='nav' className={headerCSS.nav}>

                <ul>

                    <NavLink to={'/'}><li>Home</li></NavLink>
                    <NavLink to={'/bills'}><li>Bills</li></NavLink>
                    <NavLink to={'/message'}><li>Messages</li></NavLink>

                </ul>

            </nav>

            <div id='actions' className={headerCSS.actions}>

                <button onClick={() => setDisplaySearch(true)}>
                    <SearchIcon />
                    <span>Search</span>
                </button>

                <button>
                    <NavLink to={'/profile'} className={headerCSS.link}>
                        <AccountCircleOutlinedIcon />
                        <span>Profile</span>
                    </NavLink>
                </button>

                <button>
                    <NightsStayIcon />
                    <span>Dark</span>
                </button>

            </div>

        </header>

    </React.Fragment>

}
