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
        <React.Fragment>
            <div className="col-md-4 mt-2">
                <div className="card">
                    <div className="card-body">
                        <img src={product.image} alt="..." style={{ height: "200px", width: "200px" }} />
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">Price: {product.price} | | Stock : {product.stock}</p><hr></hr>
                        <button className="btn btn-primary badge badge-pill badge-info" onClick={selectProduct}><span className="fas fa-cart-plus" style={{ width: "40px" }}></span></button>
                        <button className="btn btn-primary badge badge-pill badge-warning"><span className="fas fa-pencil-square-o" style={{ width: "40px" }} data-toggle="modal" data-target="#staticBackdropEdit" onClick={selectProduct}></span></button>
                        <button className="btn btn-primary badge badge-pill badge-danger" data-toggle="modal" data-target="#staticBackdrop"><span className="fas fa-trash" style={{ width: "40px" }}></span></button>


                    </div>
                </div>
            </div>


        </React.Fragment>
    )
}
export default CardProduct