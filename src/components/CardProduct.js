import React from 'react'


// const CardProduct = ({ product }) => {
//     return (
//         <div className="col-md-3 mt-1 ml-1 card ">
//                 <img src={product.image} alt="..." />
//                 <h5 className="card-title">{product.name}</h5>
//                 <p className="card-text">{product.price}</p>
//             <a href="/detail">goto</a>
//             </div>

//     )
// }


const CardProduct = ({ product, selectProductItem }) => {
    const selectProduct = (e) => {
        e.preventDefault()
        selectProductItem(product)

    }

    return (
        <div className="col-md-4 mt-2">
            <div className="card">
            <div className="card-body">
                <img src={product.image} alt="..." style={{ height: "200px", width:"200px" }} />
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.price}</p>
                <button className="btn btn-primary badge badge-pill badge-info" onClick={selectProduct}>Add</button>
            </div>
            </div>
        </div>
    )
}
export default CardProduct