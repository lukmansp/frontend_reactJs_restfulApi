import React, { Component } from 'react'
import axios from 'axios'
import CardProduct from './CardProduct'
import DetailProduct from './DetailProduct'

export class DaftarProduct extends Component {
    state = {
        'products': [],
        'searchName': '',
        'id_product':'',
        'user':'',
        'quantity':'',
        'price':'',
        'total':'',
        'created_at':new Date(),
        'updated_at':new Date(),
        selectProduct: null
        // selectProduct: null
    }

    actSelectProduct = (products) => {
        this.setState({
            selectProduct: products
        })
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
    onChangeSearch = (event) => {

        axios
            .get(`http://localhost:9009/product?name=${event.target.value}`)
            .then(response => {
                this.setState({ products: response.data.result })
                console.log(response)
            })
            .catch(err => {
                console.log(err)
            })
    }



    viewProduct() {
        axios
            .get("http://localhost:9009/product/")
            .then(response => {
                this.setState({ products: response.data.result })
            })
            .catch(console.log)
    }
    componentDidMount() {
        this.viewProduct()
    }
    render() {
        const dataProduct = this.state.products.map((item, index) => {
            return (

                <CardProduct product={item} key={index} selectProductItem={this.actSelectProduct} />

            )
        })
        return (
            <div className="">

                <div className="row mt-3 justify-content-left" style={{ marginLeft: "130px" }}>
                    <form viewProduct={this.viewProduct}>
                        <div className="form-group">
                            <br />
                            <input onChange={this.onChangeSearch} type="text" className="form-control" name="searchName" placeholder="Enter name" />
                          
                        </div>
                    </form>
                </div>
                <div className="row" style={{ marginLeft: "0px" }}>
                    <div className="col-md-1" style={{ marginTop: "-90px", width: "-200px", height: "850px", backgroundColor: "#f1f1f1" }}>
                        Detail
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            {dataProduct}
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card shadow">
                            <div className="card-body" style={{ marginTop: "-90px", width: "-200px", height: "850px", backgroundColor: "#f1f1f1" }}>
                                <form onSubmit={this.onSubmit}>
                                <DetailProduct product={this.state.selectProduct} />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}
export default DaftarProduct