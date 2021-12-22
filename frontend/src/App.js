import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from './component/admin/Admin';
import Homepage from './component/homepage/Homepage';
import Berita from './component/berita/Berita';
import Informasi_itb from './component/informasi_itb/Informasi_itb';
import Peserta from './component/peserta/Peserta';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/berita' element={<Berita/>} />
        <Route path='/informasi' element={<Informasi_itb/>} />
        <Route path='/login/peserta' element={<Peserta/>} />
        <Route path='/login/admin' element={<Admin/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
