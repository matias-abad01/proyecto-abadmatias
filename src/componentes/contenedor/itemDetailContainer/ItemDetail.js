import './ItemDetail.css'

function ItemDetail ({ item }){
    return(
        <div className="item-detail">
            <div className='info1'>
                <h3>{item.title}</h3>
                <img src={item.pictureUrl} alt="zapatillas" />
            </div>
            <div className='info2'>
                <span>Descripción:</span>
                <p>{item.description2}</p>
                <span> <strong>precio:</strong> ${item.price}</span>
                <button>Comprar</button>
            </div>
            
        </div>
    )

}



export default ItemDetail;