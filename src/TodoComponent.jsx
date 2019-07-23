import React from "react"
import ProtoTypers from "prop-types";

export default class TodoComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = { text: ''}
    }
    render() {
        return (<li>this.text</li>);}
}

