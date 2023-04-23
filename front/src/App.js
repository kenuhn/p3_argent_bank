import { Routes, Route} from 'react-router-dom' 
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { isConnectContext } from "./utils/context/context";
import Accueil from "./pages/Accueil";
import Connexion from "./pages/Connexion"
import Profile from "./pages/Profiles";
import Navbarre from "./Components/Navbarre/Navbarre";
import Footer from "./Components/Footer/Footer";
function App() {
  const [isConnected, setConnect] = useState(false)
  useEffect(() => {
   
    const userToken = JSON.parse(localStorage.getItem("user"))
    if(userToken) {
      setConnect(true)
    } 
  })


  return (
    <div className="App">
      <isConnectContext.Provider value={isConnected}>
      <Navbarre />  
        <Routes>
            <Route path="/" element={ <Accueil />} />
            <Route path="/connexion" element={ <Connexion />} />
            <Route path="/profile" element={ <Profile />} /> 
        </Routes>
      <Footer /> 
      </isConnectContext.Provider>
    </div>
  );
}

export default App;
