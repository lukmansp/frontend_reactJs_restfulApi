import React from 'react'
import Header from './Header'
import DaftarProduct from './DaftarProduct'
import {BrowserRouter, Route} from 'react-router-dom'
import AddProduct from './AddProduct'
import '@fortawesome/fontawesome-free/css/all.min.css'; import
'bootstrap-css-only/css/bootstrap.min.css'; import
'mdbreact/dist/css/mdb.css';
function App() {
    return (
        <BrowserRouter>
            <Header />
            <Route path="/dash" exac component={DaftarProduct}/>
            <Route path="/add" component={AddProduct}/>
        </BrowserRouter>
    )
}
export default App