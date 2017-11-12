import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Movie.css';

class Movie extends Component{
    constructor(){
        super();
        this.state = {
            editing: false,
        };

    }

    edit(){
       this.setState({editing:true});
    };

    delete(){
        alert('fuck outa here');
    };

    save(){
        var movieName = this.refs.movieName.value;
        console.log('movie name is ' + movieName)
        this.setState({editing:false});
    }

    renderNormal(){
        return (<div className="commentContainer">
            <div className="commentText">{this.props.children}</div>
            <button onClick={()=>{this.edit()}} className="button-primary">EDIT </button>
            <button onClick={()=>{this.delete()}} className="button-danger">DELETE </button>
        </div>);
    }

    renderForm(){
        return (<div className="commentContainer">
            <textarea ref="movieName" defaultValue= {this.props.children}></textarea>
            <button onClick={()=>{this.save()}} className="button-primary">SAVE </button>
        </div>);
    }

    render(){
        if(this.state.editing){
            return this.renderForm();
        }else {
            return this.renderNormal();
        }

    }
}

export default Movie;
