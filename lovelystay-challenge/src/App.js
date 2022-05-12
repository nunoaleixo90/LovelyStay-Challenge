import SearchUser from "./components/SearchUser";
import React, { useState } from 'react';

function App() {
  const [userData, setUserData] = useState({});

  console.log('setUsers : ', userData); 

  return (
    <div className="App">
      <SearchUser setUserData={setUserData}/>
    </div>
  );
}

export default App;
