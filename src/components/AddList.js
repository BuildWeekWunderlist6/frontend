import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addList } from '../redux/actions/index';
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';

const AddList = (props) => {
 const [list, setList] = useState({name: "",});

   
    const add = e => {
    e.preventDefault();
    props.addList(list);
    setList({
        name: "",
    })
  }

  const handleChange = e => {
      setList({
        ...list,
        [e.target.name]: e.target.value,
      })
  }

    return (
      <div className = "addlist">
        <div className = "card">
        <h2>Add Task</h2>
          <div className = "newTaskCard">
        <form onSubmit={add}>
          <TextField
            type="text"
            name="name"
            value={list.name}
            onInput={handleChange} placeholder = "New task name"
          />
          <br/>

          <TextField
            type="date"
            name="name"
          />
          <br/>

<label>Recurring? </label>
          <Checkbox
            type="checkbox"
            name="name"
          />
  
          <br/>
          <div className = "addButton">
          <Button size = "medium" variant = "contained" color = "primary" onClick = {add} >Add Task</Button>
          </div>
        </form>
        </div>
      </div>
      </div>
    )
}

const mapStateToProps = state => {
    return {
       
        name: state.name,
       
    }
};


export default connect(
    mapStateToProps,
    { addList }
)(AddList); 