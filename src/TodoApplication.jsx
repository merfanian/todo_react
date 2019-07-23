import * as React from "react"
import TodoList  from './TodoList';
import FormComponent from './FormComponent';


export default class TodoApplication extends React.Component{
    constructor(props){
        super(props);
        this.state = { todoItems : ["hamid", "ali"]};
        this.onSubmit = this.onSubmit.bind(this);
    }
    render(){
        return (
            <div>
                <TodoList todoItems={this.state.todoItems} ></TodoList>
                <FormComponent onSubmit={this.onSubmit}></FormComponent>
            </div>
        )
    }
    onSubmit(text){
        const arr = this.state.todoItems.concat(text);
        this.setState({todoItems : arr });
    }
}

