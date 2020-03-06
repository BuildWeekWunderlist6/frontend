import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import {createTodo, getTodos, deleteTodo} from "../redux/actions/index";
import { createGenerateClassName } from "@material-ui/core";


const Todos = (props) => {
const id = props.id;

 const getData = (id) => {
       props.getTodos(id);
       console.log("this is an id" ,id)
    }   
   

console.log("this is whats on props", props)

    const [todoText, setTodoText] = useState({todo: ""})


    const handleChanges = e => {
        setTodoText({[e.target.name]: e.target.value});
       console.log(todoText);
      };

      const submitTodo = (todoText, id) => {
        //   e.preventDefault();
          props.createTodo(todoText, id);
         

      }

     

console.log("this is todos from state", props.todo);
return(
    <>
    <button onClick={()=> {getData(id)}}>Get Todos</button>
<div>
{props.todo.map(todos => {
    const newId = todos.id;
    console.log("this is mapped todos",todos);
    return(
    <div >
        <p>{todos.todo}</p>
        <button onClick={()=> {props.deleteTodo(newId)}}>X</button>

    </div>
)
})}





<input name = "todo" placeholder = "New Todo" onChange = {handleChanges}/>
<button onClick={()=> {submitTodo(todoText, id)}}>Add Todo</button>
</div>
    </>
)
}

const mapStateToProps = state => {
    return {
    //    lists: state.list.lists,
    //     user: state.list.user,
    todo: state.todo.todos,
    newId: state.todo.id
     
        }
};

export default connect(mapStateToProps, {createTodo, getTodos, deleteTodo})(Todos);