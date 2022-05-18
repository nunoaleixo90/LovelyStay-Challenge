import React, { useState } from 'react';
import SearchUser from "./pages/SearchUser/index.js.js";
import ShowUserInfo from './pages/ShowUserInfo/index.js';
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  const [userData, setUserData] = useState({});

  console.log('setUsers : ', userData); 

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<SearchUser setUserData={setUserData}/>} />
          <Route path='/user-info' element={<ShowUserInfo userData={userData}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
