/* After searching a user, after clicking on a user 
   that user's public lists will be contained here */

   import React, { Component } from 'react'
   import UserListItem from '../../components/UserListItem/UserListItem'
   
   export default class UserListRoute extends Component {
      // componentDidMount {
         
      // }
      render() {
         return (
            <div>
               <UserListItem />
            </div>
         )
      }
   }
   