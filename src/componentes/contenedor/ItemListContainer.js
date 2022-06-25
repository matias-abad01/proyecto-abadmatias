
import './ItemListContainer.css'
import ItemCount from './itemCount';
function ListContainer ({titulo}) {
    return(
        <>
            <h1>{titulo}</h1>
            <div className='itemContainer'>       
                <ItemCount initial={1} stock= {5} nombre="Remera"/>
                <ItemCount initial={1} stock= {10} nombre="Pantalon"/>
                        
            </div>
        </>
    );
   
}


export default ListContainer;