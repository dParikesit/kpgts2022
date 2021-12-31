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
<<<<<<< HEAD
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
=======
    <AuthContext.Provider value={{name, role, addItem, removeItem }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Homepage/>} />
          <Route path='/berita' element={<Berita/>}/>
          <Route path='/login' element={<Login/>} />
          <Route path='/lupa_password' element={<Lupa_Password/>} />
          <Route path='/register' element={<Registration/>} />
          <Route path='/informasi' element={<InformasiItb/>} />
          <Route path='/login/peserta' element={<Peserta/>} />
          <Route path='/login/admin' element={<Admin/>} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
>>>>>>> 7d4b2579d0d27225a9ba676aaa4b10bf395a46ca
  );
}

export default App;
