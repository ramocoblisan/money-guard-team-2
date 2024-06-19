import React, { Suspense } from'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {lazy} from react;
import Loader from './Loader/Loader';

function App (){
    return (
       <>
       <Suspense fallback={<Loader/>}></Suspense>
       </>
    )
}