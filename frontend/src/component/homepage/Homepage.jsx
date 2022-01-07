import NavbarAuth from "../komponen_umum/NavbarAuth";
import {useEffect, useContext} from "react";
import { AuthContext } from "../komponen_umum/AuthContext";
import Footer from '../komponen_umum/Footer';

const Homepage = () => {
    return(
        <div>
            <NavbarAuth></NavbarAuth>
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
            <Footer></Footer>
        </div>
    )
}

export default Homepage;