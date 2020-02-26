import React, { Component } from 'react';
import axios from 'axios';
export class AddProduct extends Component {
    state={
        'id_product':'',
        'user':'',
        'stock':'',
        'price':'',
        'total':'',
        'created_at':new Date(),
        'updated_at':new Date()
    }
    onChange = (e) => {
        // console.log(f.target.value);
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    onSubmit = () =>{
        const data = {
            id_product: this.state.id_product,
            user: this.state.user,
            quantity: this.state.quantity,
            price: this.state.price,
            total: this.state.total,
            created_at:new Date(),
            updated_at:new Date()
        };

        axios
            .post('http://localhost:9009/order/', data)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
        }
        componentDidMount(){
            this.onSubmit();
        }
    render(){
        return (
            <div>
                <h4>About</h4>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Id_product</label>
                        <input type="text" className="form-control" name="id_product" placeholder="Enter name" onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label>user</label>
                        <input type="text" className="form-control" name="user" placeholder="Enter Writer" onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label>quantity</label>
                        <input type="text" className="form-control" name="quantity" onChange={this.onChange} placeholder="Enter Description" />
                    </div>
                    <div className="form-group">
                        <label>price</label>
                        <input type="text" className="form-control" name="price" onChange={this.onChange} placeholder="Enter Description" />
                    </div>
                    <div className="form-group">
                        <label>total</label>
                        <input type="text" className="form-control" name="total" onChange={this.onChange} placeholder="Enter Description" />
                    </div>
                    <button className="btn btn-primary">Save</button>
                </form>
            </div>
        )
    }
}
 export default AddProduct