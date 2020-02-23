import React, { Component } from 'react'
import axios from 'axios'
import CardProduct from './CardProduct'

export class DaftarProduct extends Component {
    state = {
        product: []
        // selectProduct: null
    }
    // actSelectBook = (product) => {
    //     this.setState({
    //         selectProduct: product
    //     })
    // }
    viewProduct() {
        axios
            .get("http://localhost:9009/product/")
            .then(response => {
                this.setState({ product: response.data.result })
            })
            .catch(console.log)
    }
    componentDidMount() {
        this.viewProduct()
    }
    render() {
        const dataProduct = this.state.product.map((item, index) => {
            return (
                <CardProduct product={item} key={index} />
            )
        })
        return (
            <div className="container">

                <div className="row mt-3 justify-content-center">
                        {dataProduct}
                    </div>
            </div>
        )
    }
}
export default DaftarProduct