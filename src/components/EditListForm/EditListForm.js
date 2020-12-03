import React, { Component } from 'react';
import OtakuContext from '../../contexts/OtakuContext';
import OtakuApiService from '../../services/otakuApiService';

class EditListForm extends Component {
    static contextType = OtakuContext;

    state = {
        newName: '',        
        error: null,        
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = ev => {
        ev.preventDefault();
        const newListName = this.state.newName;
        const list = this.context.currentList;
        OtakuApiService.updateListName(newListName, list)
        this.context.resetListName(newListName, list.list_id);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className='EditListForm'>
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
        )
    }
}

export default EditListForm;