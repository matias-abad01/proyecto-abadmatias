import React, { useState } from 'react';
import './itemCount.css'

function ItemCount ({stock,initial,nombre}) {

    const [contador, setcontador] = useState(initial)

    const sumar = ()=>{
        if(contador >= stock){
        }
        else{setcontador(contador + 1);}
        
    }
    const restar = ()=>{ 
        if (contador === 0){
        }
        else{setcontador(contador - 1);}
        
    }

    const onAdd = ()=>{
        if(contador === 0){
        }
        else{
            alert("total: " + contador )
        }

    }

    return(
        <div className='item'>
            <h3>{nombre}</h3>
            <p>Stock: {stock}</p>
            <div className='Contador'>
                <div className='botonContador'>
                    <button onClick={restar}>-</button>
                    <p>{contador}</p>
                    <button onClick={sumar}>+</button>    
                </div>  
                <button onClick={onAdd} className='botonAgregar'>agregar al carrito</button>
            </div>
        </div>
    );

}


export default ItemCount;