import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"

import { db } from '../../Firebase/FirebaseConfig'
import { collection, query, where, getDocs, documentId } from "firebase/firestore";

import CardUser from '../../Components/CardUser/CardUser';
import "./style.css"

const CelularDetailPage = () => {
  const {id} = useParams()
  console.log(id)

  const [celularData, setCelularData] = useState([])

  useEffect(() => {
    
    const getCelular = async () => {
      const q = query(collection(db,"celulares"), where(documentId(), "==", id));
      
      
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
      setCelularData(celularesArray) 

    }
    getCelular();
    

  }, [id])

  return (
    <div>
      {
        celularData.map((data) => {
          return(
            <div className='container'key={data.id}>
              <CardUser data={data}/>
            </div>
          )
        })
      }
    </div>
  )
}

export default CelularDetailPage