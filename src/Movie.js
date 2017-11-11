import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Movie.css';

class Movie extends Component{
    constructor(){
        super();

    }

    edit(){
        alert('');
    };

    delete(){
        alert('');
    };

    render(){
        return (<div className="movieContainer">
                    <form className="movieTitle">{this.props.child}</form>
                    <button onClick={()=>{this.delete()}} className="button-primary">EDIT </button>
                    <button  className="button-danger">DELETE </button>
                </div>);
    }
}

export default Movie;
