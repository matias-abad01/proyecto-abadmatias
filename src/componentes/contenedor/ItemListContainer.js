import React, { useState, useEffect } from 'react';

import ItemList from './ItemList';
import { SpinnerCircular } from 'spinners-react';
//punto de encuentro

// extraer api


/*const promesa = new Promise((res, rej) => {
    setTimeout(() => {
      res(ropaDeHombres);
    }, 2000);
  });
  */

function ListContainer () {
  
  const [products, setproducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const[error, setError] = useState(false)

  useEffect(() => {
    
    const getProducts = async ()=>{
      setLoading(true);
      try {
        const response = await fetch('https://ropadehombres-f34d5-default-rtdb.firebaseio.com/stock.json');
      const data = await response.json();
      
      setproducts(data);
      }
      catch(err){
        console.log(err);
        setError(true)
      }
      finally{
        setLoading(false);
        console.log("fin")
      }
      
    }
    getProducts();
   /*
    setLoading(true);
    fetch("https://ropadehombres-f34d5-default-rtdb.firebaseio.com/stock.json")
    .then((response)=> response.json())
    .then((data)=>{
      setLoading(false);
        setproducts(data);})
        .catch((err)=>console.log(err))*/
    
  }, []);

    if (loading) {
      return (
        <div style={stylecontainer}>
          <p>Cargando</p>
          <SpinnerCircular size={59} thickness={167} speed={137} color="rgba(0, 0, 0, 1)" secondaryColor="rgba(255, 255, 255, 1)" />
        </div>
      );
  } 
    else if (error){
      return(
        <p>error</p>
      )
  }
   else{
    return( 
            <div className='listContainer'>       
                <ItemList items={products}/>
                           
            </div>
    );
  }
}


export default ListContainer;

//-------STYLE----...
const stylecontainer = {
    marginTop: 100,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
}