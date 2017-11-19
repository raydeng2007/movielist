/**
 * Created by Raymond on 11/12/2017.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Movie.css';

export default class Board extends Component {

    constructor(){
        super();
        this.state = {
            movieTitles:[

            ]

        }
    }

    add(movie){
        var arr = this.state.movieTitles;
        arr.push(movie);
        this.setState({movieTitles:arr});
    }

    removeMovie(i){
        var arr = this.state.movieTitles;
        arr.splice(i,1);
        this.setState({movieTitles:arr});
    }

    updateMovie(newText,i){
        var arr = this.state.movieTitles;
        arr[i] = newText;
        this.setState({movieTitles:arr});
    }

    eachMovie(text,i) {
        return(<Movie key={i} index={i} editMovie={this.updateMovie.bind(this)} deleteMovie={this.removeMovie.bind(this)}>{text}</Movie>)

    }

    render(){
        return(
            <div>
                <button onClick={this.add.bind(this, 'MOVIE TITLE')}>ADD NEW MOVIE</button>

                <div className="board">
                    {
                        this.state.movieTitles.map(this.eachMovie.bind(this))
                    }
                </div>
            </div>
            );
    }

}

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
        this.props.deleteMovie(this.props.index);
    };

    save(){
        var movieName = this.refs.movieName.value;
        this.props.editMovie(movieName,this.props.index);
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