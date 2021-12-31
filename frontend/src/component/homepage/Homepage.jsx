import Navbar from '../komponen_umum/Navbar'
import Peserta from '../peserta/Peserta';
import NavbarLoggedIn from '../komponen_umum/NavbarLoggedIn';

const Homepage = () => {
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