import * as React from "react"

export default class TodoList extends React.Component{

    render() {
        console.log(this.props.todoItems);
        return(<ul>
            {this.props.todoItems.map(item => <li>{item}</li>)}
        </ul>);
    }
}

