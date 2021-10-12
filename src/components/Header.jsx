import React, { Component } from 'react';
import HighlightIcon from '@material-ui/icons/Highlight';


export default class Header extends Component {
    render() {
        return (
           <header>
               <h1>
                   <HighlightIcon />
                   ToDoList
               </h1>
           </header>
        )
    }
}
