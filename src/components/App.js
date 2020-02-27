import React from 'react'
import Header from './Header'
import DaftarProduct from './DaftarProduct'
import { BrowserRouter, Route } from 'react-router-dom'
import AddProduct from './AddProduct'
import '@fortawesome/fontawesome-free/css/all.min.css'; import
    'bootstrap-css-only/css/bootstrap.min.css'; import
    'mdbreact/dist/css/mdb.css';
import DetailProduct from './DetailProduct'
import Login from './auth/Login'
import Home from './Home'
function App() {
    return (
        <BrowserRouter>
            <Header />
            <Route path="/login" component={Login} />
            {/* <Route path="/dash" component={DaftarProduct} /> */}
            <Route path="/add" component={AddProduct} />
            <Route path="/detail" component={DetailProduct} />
            <Route exact path="/" component={Home} />
        </BrowserRouter>
    )
}
export default App