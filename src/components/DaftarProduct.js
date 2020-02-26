import React, { Component, Fragment } from 'react'
import axios from 'axios'
import CardProduct from './CardProduct'
import DetailProduct from './DetailProduct'
import SaveModal from './SaveModal'

export class DaftarProduct extends Component {
    state = {
        'products': [],
        'searchName': '',
        'id_product': '',
        'user': '',
        'quantity': '',
        'price': '',
        'sortBy': '',
        'name': '',
        'description': '',
        'image': '',
        'category_id': '',
        'price': '',
        'stock': '',
        selectProduct: null
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
    changeImage = event => {
        this.setState({
            image: event.target.files
        })
    }
    onclick = () => {
        const data = {
            sortBy: this.state.sortBy
        }
        axios
            .post('http://localhost:9009/order/', data)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }


    onSubmit = () => {
        const data = {
            id_product: this.state.id_product,
            user: this.state.user,
            quantity: this.state.quantity,
            price: this.state.price,
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

    onChangeKat = (event) => {
        event.preventDefault()
        console.log(event.target.id)
        axios
            .get(`http://localhost:9009/product?name=${event.target.id}`)
            .then(response => {
                this.setState({ products: response.data.result })
                console.log(response)
            })
            .catch(err => {
                console.log(err)
            })
    }

    onChangePage = (event) => {
        event.preventDefault()
        console.log(event.target.id)
        axios
            .get(`http://localhost:9009/product/?pages=${event.target.name}`)
            .then(response => {
                this.setState({ products: response.data.result })
                console.log(response)
            })
            .catch(error => {
                console.log(error)
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
            <Fragment>
                <div className="">

                    <div className="row mt-3 justify-content-left" style={{ marginLeft: "130px" }}>
                        <form viewProduct={this.viewProduct}>
                            <div className="form-group">
                                <br />
                                <input onChange={this.onChangeSearch} type="text" className="form-control" name="searchName" placeholder="Enter name" />
                            </div>
                        </form>
                    </div>
                    {/* kategory */}
                    <div className="row">
                        <div className="col-md-1" style={{ marginTop: "-90px", width: "-200px", height: "870px" }}>
                            <div className="btn-group" role="group" style={{ marginLeft: "-5px", height: "-30" }} >
                                <button id="btnGroupDrop1" type="button" className="btn btn-info badge-pill dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Filter
                            </button>
                                <div className="dropdown-menu" aria-labelledby="btnGroupDrop1" >
                                    <a className="dropdown-item" onClick={this.onChangeKat} id="sm">All </a>
                                    <a className="dropdown-item" onClick={this.onChangeKat} id="sm">Smartphone </a>
                                    <a className="dropdown-item" onClick={this.onChangeKat} id="pc">PC </a>
                                    <a className="dropdown-item" onClick={this.onChangeKat} id="cam">Camera </a>
                                </div>
                            </div>
                            <button type="button" class="btn btn-primary badge-pill" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo" style={{ marginLeft: "5px", height: "-30" }}><span className="fa fa-fw fa-plus" style={{ fontSize: "2em" }}></span></button>
                        </div>

                        <div className="col-md-8">
                            <div className="row">
                                {dataProduct}
                            </div>
                        </div>
                        {/* sidebarrigth */}
                        <div className="col-3">

                            <div className="card shadow">
                                <div className="card-body" style={{ marginTop: "-90px", width: "-200px", height: "870px", backgroundColor: "#f1f1f1" }}>
                                    <DetailProduct product={this.state.selectProduct} />
                                </div>
                            </div>
                        </div>

                        <div className="container justify-content-right">
                            <div className="row mb-9 mt-5">
                                <nav aria-label="...">
                                    <form >
                                        <ul class="pagination" style={{ marginLeft: "250px" }}>
                                            <li class="page-item disabled">
                                                <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                                            </li>

                                            <li class="page-item" aria-current="page">
                                                <a class="page-link" onClick={this.onChangePage} name="1">1 <span class="sr-only">(current)</span></a>
                                            </li>
                                            <li class="page-item" aria-current="page">
                                                <a class="page-link" onClick={this.onChangePage} name="2">2 <span class="sr-only">(current)</span></a>
                                            </li>
                                            <li class="page-item" aria-current="page">
                                                <a class="page-link" onClick={this.onChangePage} name="3">3 <span class="sr-only">(current)</span></a>
                                            </li>
                                            <li class="page-item" aria-current="page">
                                                <a class="page-link" onClick={this.onChangePage} name="4">4 <span class="sr-only">(current)</span></a>
                                            </li>
                                            <li class="page-item" aria-current="page">
                                                <a class="page-link" onClick={this.onChangePage} name="5">5 <span class="sr-only">(current)</span></a>
                                            </li>

                                            <li class="page-item">
                                                <a class="page-link" href="#">Next</a>
                                            </li>
                                            <hr></hr>
                                        </ul>
                                    </form>
                                </nav>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="card text-white bg-light mb-3" style={{ width: "1700" }}>
                    <div class="card-header"></div>
                    <div class="card-body">

                    </div>
                </div>
                <SaveModal />
            </Fragment>
        )
    }
}
export default DaftarProduct