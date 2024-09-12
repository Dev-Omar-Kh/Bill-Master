import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout/Layout';

const routes = createBrowserRouter([

    {path : '/' , element : <Layout />}

])

export default function App() {

    return <React.Fragment>

        <RouterProvider router={routes} />

    </React.Fragment>

}
