import { AuthContext } from "../komponen_umum/AuthContext";
import Navbar from '../komponen_umum/Navbar'
import NavbarLoggedIn from '../komponen_umum/NavbarLoggedIn';
import {useEffect, useContext, useState} from "react";

const NavbarAuth = () => {
  const Auth = useContext(AuthContext)
  const [loggedIn, setLoggedIn] = useState(false)
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
      console.log(response)
      if(response.loggedIn===true) {
          Auth.addItem(response.name, response.role)
          setLoggedIn(true)
      } else{
          Auth.removeItem()
          setLoggedIn(false)
      }
      console.log({Auth})
  }, []);

  if (loggedIn === true) {
    return(<NavbarLoggedIn></NavbarLoggedIn>)
  } else {
    return(<Navbar></Navbar>)
  }
}

export default NavbarAuth;