import ItemDetail from './ItemDetail';
import { SpinnerCircular } from 'spinners-react';
import React, { useState, useEffect } from 'react';




function ItemDetailContainer (){
    const [product, setproduct] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
        setTimeout(() => {
            fetch("https://ropadehombres-f34d5-default-rtdb.firebaseio.com/stock.json")
            .then((response)=> response.json())
            .then((data)=>{ setproduct(data[0])})
            .catch((err)=>console.log(err))
            .finally(()=>setLoaded(false))
        }, 2000);
    
       
    }, []);


    if(loaded){
        return(
            <div style={spinner}>
                <p>Cargando</p>
                <SpinnerCircular size={59} thickness={167} speed={137} color="rgba(0, 0, 0, 1)" secondaryColor="rgba(255, 255, 255, 1)" />
            </div>
        )
    }
    else{
    return(
        <div style={ItemDetailStyle}>
            <ItemDetail item={product}/>
        </div>
    )
}

}




export default ItemDetailContainer;



const ItemDetailStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

}
const spinner = {
    marginTop: 100,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
}