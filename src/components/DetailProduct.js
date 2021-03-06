import React, { Component } from 'react'
import axios from 'axios'
class DetailProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }
    idProduct = event => {
        this.setState({
            id: event.target.value
        });
    };

    deleteProduct = () => {
        axios
            .delete(`http://127.0.0.1:9009/product/${this.props.product.id}`)
            .then(() => {
                this.props.history.push('/')
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
            .then(response => {
                this.componentDidMount();
            })
            .catch(err => {
                console.log(err)
            })
    }
    changeImage = event => {
        console.log(event.target.files[0]);
        console.log(event.target.files);
        this.setState({
            image: event.target.files[0]
        });
    };

    editProduct = () => {

        // console.log("disini");
        const data = new FormData();
        data.append("name", this.state.name);
        data.append("description", this.state.description);
        data.append("image", this.state.image);
        data.append("category_id", this.state.category_id);
        data.append("price", this.state.price);
        data.append("stock", this.state.stock);
        console.log(this.state);

        axios.patch(`http://localhost:9009/product/${this.props.product.id}`, data);
    };

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
                            <button className="btn btn-primary">Order</button>
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
                                            <input type="text" className="form-control" name="id" placeholder="Enter name" value={this.props.product.id} readOnly onChange={this.idProduct} />

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

                            <div class="modal fade" id="staticBackdropEdit" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <input type="text" className="form-control" name="id" placeholder="Enter name" value={this.props.product.id} readOnly onChange={this.idProduct} />

                                            Name : <input onChange={this.onChange} type="text" className="form-control" name="id_product" placeholder="Enter name" value={this.props.product.name} readOnly />

                                            Price:<input onChange={this.onChange} type="text" className="form-control" name="price" placeholder="Enter name" readOnly value={this.props.product.price} />
                                            <input type="text" class="form-control" id="recipient-name" name="name" onChange={this.onChange} placeholder="Enter product" /><br></br>
                                            <input type="text" class="form-control" id="recipient-name" name="description" onChange={this.onChange} placeholder="description" />
                                            <label for="recipient-name" class="col-form-label">image:</label>
                                            <input type="file" class="form-control" id="recipient-name" onChange={this.changeImage} /><br></br>
                                            <input type="text" class="form-control" id="recipient-name" name="category" onChange={this.onChange} placeholder="category" /><br></br>
                                            <input type="text" class="form-control" id="recipient-name" name="price" onChange={this.onChange} placeholder="price" /><br></br>
                                            <input type="text" class="form-control" id="recipient-name" name="stock" onChange={this.onChange} placeholder="stock" />

                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                            <button type="button" class="btn btn-warning" data-dismiss="modal" onClick={this.editProduct}>Edit</button>
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