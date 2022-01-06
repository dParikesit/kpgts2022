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
            <NavbarLoggedIn></NavbarLoggedIn>
            {/* <Navbar /> */}
            {/* <Peserta></Peserta> */}
            <div class="tulisan">
                <div class="judul">
                    <h1>KPGTS 2022</h1>
                </div>
                <div class="content">
                    Selamat datang di KPGTS 2022. KPGTS adalah Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel dolore excepturi exercitationem illo molestias unde tenetur, delectus consectetur est mollitia rem ad dolorem commodi minus nisi neque porro. Vero, quae.
                </div>
            </div>
            <div class="image">
                <img src="" alt="Foto lambang KPGTS 2022"/>
            </div>
            <div class="button">
                <button>Register</button>
                <button>Timeline</button>
            </div>
        </div>
    )
}

export default Homepage;