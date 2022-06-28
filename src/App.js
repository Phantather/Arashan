import React, {Suspense} from "react";
import {Routes, Route} from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
      <Suspense fallback={'Loading...'}>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='' element={<Home/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Route>
        </Routes>
      </Suspense>
  );
}

export default App;
