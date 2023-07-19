import React, { useState, useContext } from 'react'
import TextField from "@mui/material/TextField";
import "./styles.css";

import { db } from '../../Firebase/FirebaseConfig'; 
import {collection, addDoc} from "firebase/firestore";

import MensajePopup from '../../Components/MensajePopup/MensajePopup';

import Compra from '../../Components/Compra/Compra';
import { CelularContext } from '../../context/CelularContext';



const ShopPage = () => {

  const [items, setItems] = useContext(CelularContext);
    /* Estados para finalizar la compra */
    const [values, setValues] = useState([]);
    const [purchaseID, setPurchaseID] = useState(null);

    /* Estados de los input */
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [ciudad, setCiudad] = useState('')

    /* Estado de error */
    const [error, setError] = useState(false)


    /* const handleOnChange = (e) => {
      const { value, name } = e.target;
      setValues({ ...values, [name]: value });
    }; */
    console.log(values)
  
    const onSubmit = async (e) => {
      e.preventDefault();
      if([nombre,apellido,ciudad].includes('')){
        setError(true)
        return;
      }

      const objetoCompra = {
        nombre,
        apellido,
        ciudad,
        items
      }
    


      // Add a new document with a generated id.
      const docRef = await addDoc(collection(db, "purchasesCollection"), {
        values: objetoCompra,
      });
      // console.log("Document written with ID: ", docRef.id);
      setPurchaseID(docRef.id);
      setValues([]);
      setItems([]);
      setNombre('');
      setApellido('');
      setCiudad('');
    };
  
    return (
      <div className='containerShop'>
        <h1 style={{ color: "white" }}>Carrito</h1>

        <div className='content'>
          <form className="FormContainer" onSubmit={onSubmit}>
            <TextField
              placeholder="Name"
              style={{ margin: 10, width: 400 }}
              name="nombre"
              value={nombre}
              onChange={(e) => {
                //? vamos tomando el valor del input y lo añadimos al estado nombre
                setNombre(e.target.value)
                console.log('la variable cambio a', nombre)
              }}
            />
            <TextField
              placeholder="Last Name"
              style={{ margin: 10, width: 400 }}
              name="apellido"
              value={apellido}
              onChange={(e) => {
                //? vamos tomando el valor del input y lo añadimos al estado nombre
                setApellido(e.target.value)
                console.log('la variable cambio a', apellido)
              }}
            />
            <TextField
              placeholder="City"
              style={{ margin: 10, width: 400 }}
              name="ciudad"
              value={ciudad}
              onChange={(e) => {
                //? vamos tomando el valor del input y lo añadimos al estado nombre
                setCiudad(e.target.value)
                console.log('la variable cambio a', ciudad)
              }}
            />
            <button className="btnASendAction">Send</button>
          </form>
          <div className='CompraScroll'>
            <Compra/>
        </div>

        </div>
        
  
        {purchaseID ? <MensajePopup purchaseID={purchaseID} /> : null}
        
        
      </div>
    );
  };
  
  export default ShopPage;