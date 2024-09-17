import React, { useEffect, useState } from 'react';
import Logo from './../../../Site/Components/Logo/Logo';
import { Link, NavLink } from 'react-router-dom';

import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import PeopleOutlineSharpIcon from '@mui/icons-material/PeopleOutlineSharp';
import MailOutlineTwoToneIcon from '@mui/icons-material/MailOutlineTwoTone';
import ReceiptLongSharpIcon from '@mui/icons-material/ReceiptLongSharp';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

import sideCSS from './side_bar.module.css';
import './active.css';
import { motion } from 'framer-motion';


export default function SideBar({reDisplay}) {

    const [logoHeight, setLogoHeight] = useState(50);
    const [logoContHeight, setLogoContHeight] = useState(90);

    // ====== resize-logo ====== //

    useEffect(() => {

        const handleResize = () => {

            if(window.innerWidth < 750){
                setLogoHeight(50);
            }

            else if (window.innerWidth < 1121) {
                setLogoHeight(30);
            }
            else {
                setLogoHeight(50);
            }
        };

        handleResize();

        window.addEventListener('resize' , handleResize);

        return () => {

            window.removeEventListener('resize' , handleResize);

        }

    } , []);

    // ====== resize-navbar ====== //

    useEffect(() => {

        const logoCont = document.getElementById('logoCont');

        const handleNavHeight = () => {

            setLogoContHeight(logoCont.offsetHeight);

        }

        const resizeObserver = new ResizeObserver(handleNavHeight);

        resizeObserver.observe(logoCont);

        return () => {
            resizeObserver.unobserve(logoCont);
        };

    } , [logoContHeight]);

    // ====== close-nav-phone ====== //

    const closeNav = () => {

        reDisplay(false);

    }

    return <React.Fragment>

        <div className={sideCSS.container}>

            <div onClick={closeNav} id='logoCont' className={sideCSS.logo}>

                <Logo height={logoHeight} toggle={true} goTo={'/admin'} />

            </div>

            <nav style={{height : `calc(100vh - calc(${logoContHeight}px + 20px))`}} className={sideCSS.nav}>

                <ul>

                    <NavLink onClick={closeNav} to={'/admin'} className={'admin'}>
                        <PeopleOutlineSharpIcon />
                        <li>Users</li>
                    </NavLink>

                    <NavLink onClick={closeNav} to={'/admin/invoices'} className={'admin'}>
                        <ReceiptLongSharpIcon />
                        <li>Invoices</li>
                    </NavLink>

                    <NavLink onClick={closeNav} to={'/admin/payDates'} className={'admin'}>
                        <CurrencyExchangeOutlinedIcon />
                        <li>Payment dates</li>
                    </NavLink>

                    <NavLink onClick={closeNav} to={'/admin/messages'} className={'admin'}>
                        <MailOutlineTwoToneIcon />
                        <li>Messages</li>
                    </NavLink>

                    <NavLink onClick={closeNav} to={'/admin/profile'} className={'admin'}>
                        <SettingsRoundedIcon />
                        <li>Company info</li>
                    </NavLink>

                </ul>

                <motion.span onClick={closeNav} whileTap={{scale : 0.95}} className={sideCSS.admin}>
                    <Link>
                        <AdminPanelSettingsOutlinedIcon />
                        <span>Login as admin</span>
                    </Link>
                </motion.span>

            </nav>

        </div>

    </React.Fragment>

}
