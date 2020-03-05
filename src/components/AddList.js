import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addList } from '../redux/actions/index';

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
        <form onSubmit={add}>
            <label>List Name: </label>
          <input
            type="text"
            name="name"
            value={list.name}
            onChange={handleChange}
          />
          
          <button>Add List</button>
        </form>
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