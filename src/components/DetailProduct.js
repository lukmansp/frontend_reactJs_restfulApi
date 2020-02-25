import React, { Component } from 'react'
// import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

class DetailProduct extends Component {

    render() {
        console.log(this.props.product)
        return (
            <div>

                {this.props.product ?

                    <p className="card-title">

                        Name : {this.props.product.name}<br />
                        id_product:<input onChange={this.onChange} type="text" className="form-control" name="id_product" placeholder="Enter name" value={this.props.product.id} readOnly /><br />
                       
                        User:<input onChange={this.onChange} type="text" className="form-control" name="user" placeholder="Enter name" />
                        stock:<input onChange={this.onChange} type="text" className="form-control" name="quantity" placeholder="Enter name" />
                        Price:<input onChange={this.onChange} type="text" className="form-control" name="price" placeholder="Enter name" readOnly value={this.props.product.price}/>
                        Totall : <input onChange={this.onChange} type="text" className="form-control" name="total" placeholder="Enter name" /> <br />
                        <button className="btn btn-primary">Save</button>

                    </p>

                    :
                    <p className="btn btn-primary badge badge-pill">Cart</p>
                }

            </div>
        )
    }
}
export default DetailProduct