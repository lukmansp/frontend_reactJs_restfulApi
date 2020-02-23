import React from 'react'

const CardProduct = ({ product }) => {
    return (
        <div class="col-md-3 mt-1 ml-1 card ">
                <img src={product.image} alt="..." />
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.price}</p>
            </div>
        
    )
}
export default CardProduct