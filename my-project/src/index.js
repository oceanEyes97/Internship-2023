import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RouterConst from "./RouterConst"
import {RouterProvider} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <RouterProvider router={RouterConst} />
 
);
