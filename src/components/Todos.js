import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import {createTodo, getTodos} from "../redux/actions/index";


const Todos = (props) => {

 useEffect(() => {
       props.getTodos(id);
    }, []);

    const [todoText, setTodoText] = useState({todo: ""})
const id = props.id;

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
<div>
{props.todo.map(todos => {
    
    console.log("this is mapped todos",todos);
    return(
    <div key={todos.id}>
        <p>{todos.todo}</p>

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
    todo: state.todo.todos
     
        }
};

export default connect(mapStateToProps, {createTodo, getTodos})(Todos);