import React, { Component } from "react";
import OtakuContext from "../../contexts/OtakuContext";
import OtakuApiService from "../../services/otakuApiService";
import "./EditListForm.css";

class EditListForm extends Component {
  static contextType = OtakuContext;

  state = {
    newName: "",
    error: null,
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (ev) => {
    ev.preventDefault();
    const newListName = this.state.newName;
    const list = this.context.currentList;
    OtakuApiService.updateListName(newListName, list);
    this.context.resetListName(newListName, list.list_id);
  };

    handleDelete = ev => {
        const list_id = this.context.currentList.list_id;       
        OtakuApiService.deleteList(list_id)
            .then(result => {
                if (result === true) {
                    this.context.resetUserLists(list_id);
                    this.context.setCurrentList({});
                }
            });
    }

    render() {
        return (
            <div>
                <form
                    className='EditListForm'
                    onSubmit={(event) => {
                        this.handleSubmit(event);
                        this.props.editing(event);
                    }}>
                    <label htmlFor='newName'></label>
                    <input
                        type='text'
                        name='newName'
                        placeholder='New List Name'
                        value={this.state.nameInput}
                        onChange={this.handleChange}
                        required />
                    <label htmlFor='editListSubmit'></label>
                    <button type='submit' name='editListSubmit'>Submit</button>
                </form>
                <button onClick={this.handleDelete} className='delete-button'>
                    <i className="fas fa-trash-alt"></i>
                </button>
            </div>

        )
    }
}

export default EditListForm;
