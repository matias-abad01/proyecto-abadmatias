import './ItemDetail.css'

function ItemDetail ({ item }){
    return(
        <div className="item-detail">
            <div className='info1'>
                <h3>{item.title}</h3>
                <img src={item.image} alt="" />
            </div>
            <div className='info2'>
                <span>Descripción:</span>
                <p>{item.description}</p>
                <span> <strong>precio:</strong> ${item.price}</span>
                <button>Comprar</button>
            </div>
            
        </div>
    )

}



export default ItemDetail;