import React, { Component } from 'react'
// import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import axios from 'axios'
class DetailProduct extends Component {
    // state = {
    //     'products': [],
    //     'searchName': '',
    //     'id_product': '',
    //     'user': '',
    //     'quantity': '',
    //     'price': '',
    //     selectProduct: null
    //     // selectProduct: null
    // }
    // state = {
    //     id: ''
    // }
    idProduct = event => {
        this.setState({
            id: event.target.value
        });
    };

    deleteProduct = () => {
        axios
            .delete(`http://127.0.0.1:9009/product/${this.props.product.id}`)
            .then(response => {
                //this.setState({ ArrProductsId: response.data.result });
                // this.componentDidMount();
                console.log(response);
            })
            .catch(console.log);
    };


    onChange = (e) => {
        // console.log(f.target.value);
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit = (e) => {
        console.log(this.props)
        e.preventDefault();
        const data = {
            id_product: this.props.product.id,
            user: this.state.user,
            quantity: this.state.quantity,
            price: this.props.product.price,
            total: this.state.total,
            created_at: new Date(),
            updated_at: new Date()
        };

        axios({
            method: "POST",
            url: "http://localhost:9009/order/",
            data: data
        })
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }
    componentDidMount() {
    }

    render() {
        console.log(this.props.product)
        return (
            <div>

                {this.props.product ?

                    <p className="card-title">
                        <form onSubmit={this.onSubmit}>
                            <input onChange={this.onChange} type="text" className="form-control" name="id_product" placeholder="Enter name" value={this.props.product.id} hidden readOnly /><br />
                            Name : <input onChange={this.onChange} type="text" className="form-control" name="id_product" placeholder="Enter name" value={this.props.product.name} readOnly /><br />

                            User:<input onChange={this.onChange} type="text" className="form-control" name="user" placeholder="Enter name" />
                            stock:<input onChange={this.onChange} type="text" className="form-control" name="quantity" placeholder="Enter name" />
                            Price:<input onChange={this.onChange} type="text" className="form-control" name="price" placeholder="Enter name" readOnly value={this.props.product.price} />
                            <button className="btn btn-primary">Save</button>
                            <div class="modal fade" id="staticBackdrop" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <input  type="text" className="form-control" name="id" placeholder="Enter name" value={this.props.product.id} readOnly onChange={this.idProduct} />

                                            Name : <input onChange={this.onChange} type="text" className="form-control" name="id_product" placeholder="Enter name" value={this.props.product.name} readOnly />

                                            Price:<input onChange={this.onChange} type="text" className="form-control" name="price" placeholder="Enter name" readOnly value={this.props.product.price} />


                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                            <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={this.deleteProduct}>Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </p>

                    :
                    <p className="btn btn-primary badge badge-pill">Cart</p>
                }

            </div>
        )
    }
}
export default DetailProduct