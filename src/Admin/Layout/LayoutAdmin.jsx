import React, { useEffect, useState } from 'react';

import layoutCSS from './layout.module.css';
import SideBar from '../Components/Side-Bar/SideBar';
import Header from '../Components/Header/Header';
import { Outlet } from 'react-router-dom';

export default function LayoutAdmin() {

    // ====== display-nav-phone ====== //

    const [display, setDisplay] = useState(false);

    useEffect(() => {

        const sideBar = document.getElementById('sideBar');
        const overlay = document.getElementById('overlay');

        if(display){
            sideBar.classList.add(layoutCSS.display_side_bar);
            overlay.classList.add(layoutCSS.display_over_side);
        }
        else{
            sideBar.classList.remove(layoutCSS.display_side_bar);
            overlay.classList.remove(layoutCSS.display_over_side);
        }

    } , [display]);

    return <React.Fragment>

        <div className={layoutCSS.container}>

            <div id='sideBar' className={layoutCSS.side_bar}>

                <span onClick={() => { setDisplay(false)}} id='overlay' className={layoutCSS.over_side}></span>

                <SideBar reDisplay={setDisplay}/>

            </div>

            <div className={layoutCSS.main_section}>

                <Header reDisplay={setDisplay} />

                <div className={layoutCSS.content_cont}>

                    <Outlet />

                </div>

            </div>

        </div>

    </React.Fragment>

}
