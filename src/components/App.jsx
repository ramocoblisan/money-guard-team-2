import React, { Suspense } from'react';
import {Navigate, Route, Routes} from "react-router-dom";

import Loader from '../components/Loader';

function App (){
    return (
       <>
       <Suspense fallback={<Loader/>}>
       <Routes>
      <Route path="/" element={<Navigate to="/home" replace/>} />
          <Route
            path="register"
            element={
              <RestrictedRoute component={Register} redirectTo="/home" />
            }
          />
       </Routes>
       </Suspense>
       </>
    )
}