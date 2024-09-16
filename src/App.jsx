import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout/Layout';
import { Provider, useSelector } from 'react-redux';
import { Store } from './Redux/Store';
import LogUser from './Pages/Auth/LogUser';
import RegAdmin from './Pages/Auth/RegAdmin';
import LogAdmin from './Pages/Auth/LogAdmin';

const routes = createBrowserRouter([

    {path : '/' , element : <Layout />},

    {path : '/loginUsers' , element : <LogUser />},
    {path : '/regAdmin' , element : <RegAdmin />},
    {path : '/logAdmin' , element : <LogAdmin />},

]);

function DarkModeView() {

    const {darkMode} = useSelector(store => store.darkMode);

    useEffect(() => {

        if (darkMode){
            document.body.classList.add('dark_mode');
        } 
        else{
            document.body.classList.remove('dark_mode');
        }

    }, [darkMode]);

    return <RouterProvider router={routes} />;

}

export default function App() {

    return <React.Fragment>

        <Provider store={Store}>

            <DarkModeView />

        </Provider>

    </React.Fragment>

}
