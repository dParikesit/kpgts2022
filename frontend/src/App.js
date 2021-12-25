import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from './component/admin/Admin';
import Homepage from './component/homepage/Homepage';
import Berita from './component/berita/Berita';
import InformasiItb from './component/informasi_itb/Informasi_itb';
import Peserta from './component/peserta/Peserta';
import React from 'react';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Homepage/>} />
        <Route path='/berita' element={<Berita/>} />
        <Route path='/informasi' element={<InformasiItb/>} />
        <Route path='/login/peserta' element={<Peserta/>} />
        <Route path='/login/admin' element={<Admin/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
