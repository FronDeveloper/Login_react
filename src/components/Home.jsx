import React from 'react'
import appFirebase from '../credenciales'
import {getAuth, signOut } from 'firebase/auth'
import { useEffect, useState } from 'react';
import image from '../assets/imagen4.jpg'

const auth = getAuth(appFirebase)

const Home = ({correoUsuario}) => {
const [mensaje, setMensaje] = useState('');

  useEffect(()=>{
    const accion = localStorage.getItem('accion');

    if(accion === 'registro'){
      setMensaje('Registro exitoso');
     // window.location.href = '/src/components/Login.jsx';
    }else if(accion === 'inicio_sesion'){
      setMensaje('Inicio de sesión exitoso');
    }

    localStorage.removeItem('accion');
    
  }, []);

  return (

      <div>
                <h2>{mensaje}</h2>
       <h3>Bienvenid@ {correoUsuario}
        <button className='btn btn-primary' onClick={()=>signOut(auth)}>Cerrar sesión</button></h3>

    <header className='content-header'>
        <nav className='content-nav'>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Categoría</a></li>
            <li><a href="#">Nosotros</a></li>
            <li><a href="#">Contactos</a></li>
          </ul>
        </nav>
    </header>

    <main>
      <picture>
        <img src={image} alt="" />
      </picture>
    </main>
      </div>
  )
}
export default Home