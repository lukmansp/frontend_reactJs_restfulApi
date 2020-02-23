import React, { Component } from 'react';
import axios from 'axios';export class AddProduct extends Component {
    state={
        // 'id_product':'',
        // 'id_category':'',
        // 'stock':'',
        // 'price':'',
        // 'total':'',
        // 'created_at':new Date(),
        // 'updated_at':new Date()
        'name' : '',
        'writer' : '',
        'description' : '',
        'publisher' : '',
        'year' : '',
        'stock' : '',
        'genre' : '',
        'created_at':new Date(),
        'updated_at':new Date()
    }
    // handlerChange=(e)=>{
    //     this.setState({[e.target.name] : e.target.value})
    // }
    // handlerSubmit=(e)=>{
    //     e.preventDefault()
    //     console.log(this.state)
    // }
    onChange = (e) => {
        // console.log(f.target.value);
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    onSubmit = () =>{
        const data = {
            // id_product: this.state.id_product,
            // id_category: this.state.id_category,
            // stock: this.state.stock,
            // price: this.state.price,
            // total: this.state.total
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
            // console.log('did mount')
            // this.getAllBook();
            // this.onUpdate();
            // this.onDelete();
        }
    render(){
        return (
            // <div className="container">
            //  <h2>Tambah Product</h2> 
            // <form  onSubmit={this.handlerSubmit}>
            //         <tr>
            //             <td>name</td>
            //             <td><input type="text" name="name" onChange={this.onChange}/></td>
            //         </tr>
            //         <tr>
            //             <td>writer</td>
            //             <td><input type="text" name="writer" onChange={this.onChange}/></td>
            //         </tr>
            //         <tr>
            //             <td>description</td>
            //             <td><input type="text" name="description" onChange={this.onChange}/></td>
            //         </tr>
            //         <tr>
            //             <td>publisher</td>
            //             <td><input type="text" name="publisher" onChange={this.onChange}/></td>
            //         </tr>
            //         <tr>
            //             <td>year</td>
            //             <td><input type="text" name="year" onChange={this.onChange}/></td>
            //         <tr>
            //             <td>stock</td>
            //             <td><input type="text" name="stock" onChange={this.onChange}/></td>
            //         </tr>
            //         <tr>
            //             <td>genre</td>
            //             <td><input type="text" name="genre" onChange={this.onChange}/></td>
            //         </tr>
                
            //         <tr>
            //             <td></td>
            //             <td><button className="btn btn-primary">Save</button></td>
            //         </tr>
            // </form>
            // </div>
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