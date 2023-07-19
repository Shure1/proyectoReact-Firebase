import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"

import { db } from '../../Firebase/FirebaseConfig'
import { collection, query, where, getDocs, documentId } from "firebase/firestore";

import CardUser from '../../Components/CardUser/CardUser';

const CelularMarcaPage = () => {
  const {marca} = useParams()
  console.log(marca)

  const [celularData, setCelularData] = useState([])

  useEffect(() => {
    
    const getCelular = async () => {
      const q = query(collection(db,"celulares"), where('Marca', "==", marca));
      
      
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
    

  }, [marca])

  return (
    <div>
      {
        celularData.map((data) => {
          return(
            <div key={data.id}>
              <CardUser data={data}/>
            </div>
          )
        })
      }
    </div>
  )
}

export default CelularMarcaPage;