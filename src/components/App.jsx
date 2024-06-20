import React, { Suspense } from'react';
import {Navigate, Route, Routes} from "react-router-dom";
import { RestrictedRoute} from '../authRoutes/RestrictedRoute';

import Loader from '../components/Loader';
import Register from '../partials/Pages/RegisterPage';
import Home from '../partials/Pages/BackupHome';

// function App (){
//     return (
//        <>
//        <Suspense fallback={<Loader/>}>
//        <Routes>
//         <Route path="/" element={<Navigate to="/home" replace/>} />
//         <Route path="home" element={<Home />} /> 
//         <Route
//             path="register"
//             element={
//               <RestrictedRoute component={Register} redirectTo="/home" />
//             }
//           />
//        </Routes>
//        </Suspense>
//        </>
//     )
// }

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Navigate to="/register" replace />} /> 
          <Route path="home" element={<Home />} /> 
          <Route
            path="register"
            element={<RestrictedRoute component={Register} redirectTo="/home" />}
          />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;