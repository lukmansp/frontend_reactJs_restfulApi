import React, { Component } from 'react'
import axios from 'axios'
class Alert extends Component {
    render() {
        console.log(this.props.product)
        return (
            <div class="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        )
    }
}

export default alert