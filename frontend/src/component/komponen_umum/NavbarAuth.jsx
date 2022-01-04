import { AuthContext } from "../komponen_umum/AuthContext";
import Navbar from '../komponen_umum/Navbar'
import NavbarLoggedIn from '../komponen_umum/NavbarLoggedIn';
import {useEffect, useContext} from "react";

const NavbarAuth = () => {
  const Auth = useContext(AuthContext)
  useEffect(async () => {
      // Update the document title using the browser API
      let response = await fetch('/api/user/login',{
          method: 'GET',
          mode: 'same-origin',
          credentials: "same-origin",
          headers: {
              'Content-Type': 'application/json'
          }
      })
      response = await response.json()
      if(response.loggedIn===true) {
          Auth.addItem(response.name, response.role)
      }
  }, []);
  
  if (Auth.role == null) {
    return(<Navbar></Navbar>)
  } else {
    return(<NavbarLoggedIn></NavbarLoggedIn>)
  }
}

export default NavbarAuth;