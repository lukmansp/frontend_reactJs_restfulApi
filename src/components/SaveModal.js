import React, { Component, Fragment } from 'react'
import axios from 'axios'

class saveModal extends Component {
    state = {
        'products': [],
        'searchName': '',
        'id_product': '',
        'user': '',
        'quantity': '',
        'price': '',
        'sortBy': '',
        'name':'',
        'description':'',
        'image':'',
        'category_id':'',
        'price':'',
        'id':'',
        'stock':'',
        selectProduct: null
    }
    changeImage = event => {
        console.log(event.target.files[0]);
        console.log(event.target.files);
        this.setState({
            image: event.target.files[0]
        });
    };
    onChange = (e) => {
        // console.log(f.target.value);
        this.setState({
            [e.target.name]: e.target.value
        })
    }
   
    createProduct = () => {
        
        // console.log("disini");
        const data = new FormData();
        data.append("name", this.state.name);
        data.append("description", this.state.description);
        data.append("image", this.state.image);
        data.append("category_id", this.state.category_id);
        data.append("price", this.state.price);
        console.log("masuk sini")
        data.append("stock", this.state.stock);
        console.log(this.state);

        axios.post("http://localhost:9009/product", data);
    };
    render() {
        return (
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">New message</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="form-group">
                                    <input type="text" class="form-control" id="recipient-name" name="name" onChange={this.onChange} placeholder="Enter product" /><br></br>
                                    <input type="text" class="form-control" id="recipient-name" name="description" onChange={this.onChange} placeholder="description" />
                                    <label for="recipient-name" class="col-form-label">image:</label>
                                    <input type="file" class="form-control" id="recipient-name" onChange={this.changeImage} /><br></br>
                                    <input type="text" class="form-control" id="recipient-name" name="category" onChange={this.onChange} placeholder="category" /><br></br>
                                    <input type="text" class="form-control" id="recipient-name" name="price" onChange={this.onChange} placeholder="price" /><br></br>
                                    <input type="text" class="form-control" id="recipient-name" name="stock" onChange={this.onChange} placeholder="stock" />
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={this.createProduct}>New product</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default saveModal