import React, { useState, useEffect } from 'react';
import ropaDeHombres from './data';
import ItemList from './ItemList';
//punto
const promesa = new Promise((res, rej) => {
    setTimeout(() => {
      res(ropaDeHombres);
    }, 2000);
  });

function ListContainer () {
    const [products, setproducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    promesa.then((response) => {
      setLoading(false);
      setproducts(response);
    });
  }, []);

    if (loading) {
    return (
      <>
        <p>Cargando...</p>
      </>
    );
  }
    return( 
            <div className='listContainer'>       
                <ItemList items={products}/>           
            </div>
    );
   
}


export default ListContainer;