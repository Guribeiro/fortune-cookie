import React, { Component } from 'react';
import './index.css';


class ImageCookie extends Component{
    constructor(props){
        super(props)
        this.state = {
            image: props.img
        }
    }

    render() {
        return (
            <div className='container-img'>
                <img src={this.state.image} alt=""/>
            </div>
        );
    }
}

export default ImageCookie;