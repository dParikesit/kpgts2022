import Navbar from '../komponen_umum/Navbar'
import Peserta from '../peserta/Peserta';
import NavbarLoggedIn from '../komponen_umum/NavbarLoggedIn';
import {useEffect, useContext} from "react";
import { AuthContext } from "../komponen_umum/AuthContext";

const Homepage = () => {
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

    return(
        <div>
            {/* <NavbarLoggedIn></NavbarLoggedIn> */}
            <Navbar />
            {/* <Peserta></Peserta> */}
            <p>Homepage</p>
        </div>
    )
}

export default Homepage;