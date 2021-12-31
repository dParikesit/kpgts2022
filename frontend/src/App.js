import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Admin from './component/admin/Admin';
import Homepage from './component/homepage/Homepage';
import Berita from './component/berita/Berita';
import InformasiItb from './component/informasi_itb/Informasi_itb';
import Peserta from './component/peserta/Peserta';
import Registration from "./component/komponen_umum/Register";
import Login from "./component/komponen_umum/Login";
import Lupa_Password from "./component/komponen_umum/Lupa_Password";
import React from 'react';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Homepage/>} />
        <Route path='/berita' element={<Berita/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/lupa_password' element={<Lupa_Password/>} />
        <Route path='/register' element={<Registration/>} />
        <Route path='/informasi' element={<InformasiItb/>} />
        <Route path='/registerTO' element={<Peserta/>} />
        <Route path='/login' element={<Admin/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
