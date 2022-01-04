import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Admin from './component/admin/Admin';
import Homepage from './component/homepage/Homepage';
import Berita from './component/berita/Berita';
import InformasiItb from './component/informasi_itb/Informasi_itb';
import Peserta from './component/peserta/Peserta';
import Registration from "./component/komponen_umum/Register";
import Login from "./component/komponen_umum/Login";
import Lupa_Password from "./component/komponen_umum/Lupa_Password";
import React, {useState} from 'react';
import Profile from "./component/peserta/Profile";
import {AuthContext} from "./component/komponen_umum/AuthContext";
import './App.css';

function App() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const addItem = (newName, newRole) => {
    setName(newName)
    setRole(newRole)
  };
  const removeItem = () => {
    setName("")
    setRole("")
  };
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
        <Route path='/profile' element={<Profile/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
