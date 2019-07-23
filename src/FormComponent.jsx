import * as React from 'react'

export default class FormComponent extends React.Component {

    render() {
        console.log(this.props);
        return(
            <form onSubmit={(event) =>{
                event.preventDefault();
                this.props.onSubmit(event.target.children[0].value);
            }}>
                <input type= "text"></input>
                <button type= "submit"></button>
            </form>
        )
    }
}