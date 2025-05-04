
import HeaderNavbar from './Components/Navbar';
import Navbar from './Components/Navbar';
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Countries from './Pages/Countries';
import Dashboard from './Pages/Dashboard';
import { CountryProvider } from './Context/countryContext.jsx';
import CountryDetails from './Pages/CountryDetails.jsx';
import SignIn from './Pages/SignIn.jsx';
import SignUp from './Pages/SignUp.jsx';
import { UserProvider } from './Context/userContext.jsx';
import Footer from './Components/Footer.jsx';


function App() {
  

  return (
    <>
  
     <UserProvider>
 <CountryProvider>
     <BrowserRouter>
  
     <HeaderNavbar /> 
     <Routes>
      <Route path='/' element={<Dashboard/>}>    </Route>
      <Route path='/countries' element={<Countries/>}>    </Route>
      <Route path="/country/:code" element={<CountryDetails />} /> {/* ⬅️ Add this */}
      <Route path="/signIn" element={<SignIn />} /> {/* ⬅️ Add this */}
      <Route path="/signup" element={<SignUp />} /> {/* ⬅️ Add this */}

     </Routes>
     <Footer/>
     </BrowserRouter>
     </CountryProvider>

     </UserProvider>
    </>
  )
}

export default App
