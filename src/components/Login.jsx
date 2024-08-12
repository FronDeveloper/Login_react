import React, { useState } from 'react'
import Imagen from '../assets/imagen2.png'
import Profile from '../assets/profile.jpg'
import appFirebase from '../credenciales'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

//import { getFirestore, doc, setDoc } from 'firebase/firestore';/*Campo añadido */

const auth = getAuth(appFirebase)
//const db = getFirestore(appFirebase);

const Login = ({setMensaje}) => {
  const [registrando, setRegistrando] = useState(false);
  //const [mensaje, setMensaje] = useState('');

  const functAutenticacion = async(e)=>{
    e.preventDefault();
    const correo = e.target.email.value;
    const contraseña = e.target.password.value;
    
    
    if(registrando){
      const nombre = e.target.nombre?.value;
      const apellido = e.target.apellido?.value;
      const telefono = e.target.telefono?.value;
      
      if (!correo || !contraseña || !nombre || !apellido || !telefono) {
        setMensaje("Todos los campos son obligatorios.");
        return;
      }
      
      if (contraseña.length < 8) {
        setMensaje("La contraseña debe tener al menos 8 caracteres.");
        return;
      }
      
      try {
        await createUserWithEmailAndPassword(auth, correo, contraseña);
        localStorage.setItem('accion', 'registro');
        //  await setDoc(doc(db, "usuarios", usuarioFirebase.user.uid), {nombre, apellido, telefono, correo});
        setMensaje("Registro exitoso. Ahora puedes iniciar sesión");
        setRegistrando(false);
        
      }catch (error) {
        console.error(error); // Para ver el error en la consola del navegador
        setMensaje("Error al registrar el usuario: " + error.message);
      }
      
    } else{
      // Para iniciar sesión, solo validamos correo y contraseña
      if(!correo || !contraseña){
        setMensaje("Por favor, ingresa tu correo y contraseña.");
        return;
      }
        
        try {
          
          await signInWithEmailAndPassword(auth, correo, contraseña);
          localStorage.setItem('accion', inicio_sesion);
          setMensajeensaje("Inicio de sesión exitoso.");
          
        } 
        catch (error) {
          console.error('Error en inicio de sesión'); // Para ver el error en la consola del navegador
          setMensaje("El correo o contraseña son incorrectas.");
        }
      };
    }

  return (
    <div className='container'>
        <div className='row'>
          {/*Columna pequeña para formulario */}
          <div className='col-md-4'>
              <div className="padre">
                  <div className='card card-body shadow-lg'>
                    <img className='profile' src={Profile} alt="" />
                    <form onSubmit={functAutenticacion}>
                      {registrando && (
                        <>
                          <input className='formulario' id='nombre' type="text" placeholder='Ingresar Nombre' />
                          <input className='formulario' id='apellido' type="text" placeholder='Ingresar Apellido' />
                          <input className='formulario' id='telefono' type="text" placeholder='Ingresar Teléfono' />
                        </>
                      )}
                      <input className='formulario' id='email' type="text" placeholder='Ingresar Email' />
                      <input className='formulario' id='password' type="password" placeholder='Ingresar contraseña'/>
                      <button className='btn-form'>{registrando ? "Regístrate" : "Iniciar Sesión"}</button>
                    </form>
                      <h4 className='user-access'>
                           {registrando ? "Si ya tienes cuenta" : "Si no tienes cuenta"}
                      <button className='press-btn' onClick={()=> setRegistrando(!registrando)}>
                           {registrando ? "Iniciar Sesión" : "Regístrate"}
                      </button>
                      </h4>
                  </div>
              </div>
          </div>

          {/*Columna grande para imagen */}
          <div className="col-md-8">
            <img src={Imagen} alt="" />
          </div>
        </div>
    </div>
  );
};

export default Login
