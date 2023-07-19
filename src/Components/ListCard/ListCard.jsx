import React from 'react'
import {useEffect, useState} from 'react'

import CardUser from '../CardUser/CardUser';
import {Link} from "react-router-dom"

/* CSS */
import './ListCard.css'

/* FIREBASE */
import { db } from '../../Firebase/FirebaseConfig'
import { collection, query, where, getDocs } from "firebase/firestore";

const ListCard = () => {
    const [celulares, setCelulares] = useState([])

    useEffect(() => {
    
        const getCelular = async () => {
          const q = query(collection(db,"celulares"));
          
          
          /* retorna un array */
          const querySnapshot = await getDocs(q);
          /* esta llamada nos entrega los datos (retorna un obj) */
          /* console.log(querySnapshot.docs) */
    
          const celularesArray = querySnapshot.docs.map((doc) => {
            const {Año, Valor, Marca,img} = doc.data();
            const CelularObjeto = {
              id:doc.id,
              Año,
              Valor,
              Marca,
              img
            };
            
            return CelularObjeto
          });
          setCelulares(celularesArray) 
    
        }
        getCelular();
        
    
      }, [])
  return (
    <div>
      
      <div className='celulares-grid'>
        {
          celulares.map((celular) => {
            console.log(celular)
            return(
              <div key={celular.id}>
                <CardUser data={celular}/>
                
                
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default ListCard