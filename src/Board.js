/**
 * Created by Raymond on 11/12/2017.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Movie from "./Movie";

export default class Board extends Component {

    constructor(){
        super();
        this.state = {
            movieTitles:[
                'movie1',
                'movie2',
                'movie3'
            ]

        }
    }

    render(){
        return(
            <div className="board">
                {
                    this.state.movieTitles.map(function (text,i) {
                        return(<Movie key={i}>{text}</Movie>)

                    })
                }
            </div>
            );
    }

}