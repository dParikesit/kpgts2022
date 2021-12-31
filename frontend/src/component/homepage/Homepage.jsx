import Navbar from '../komponen_umum/Navbar'
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
        Auth.addItem(response.name, response.role)
    }, []);

    return(
        <div>
            <Navbar />
            <p>Homepage</p>
        </div>
    )
}

export default Homepage;