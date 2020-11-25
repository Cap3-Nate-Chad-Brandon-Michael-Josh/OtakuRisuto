//form for adding new list. Should be contained in nav bar

import React, { Component } from 'react'

export default class NewListForm extends Component {
  render() {
    return (
      <div>
        <form className='newListForm'>
          <label htmlFor='listInput'></label>
          <input className='listInput' id='listInput' placeholder='Create New List'></input>
          <button type='submit'>Create</button>
        </form>
      </div>
    )
  }
}
