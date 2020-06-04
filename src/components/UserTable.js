import React from 'react'
import { FiEdit } from 'react-icons/fi'
import { MdDelete } from 'react-icons/md'

const UserTable = props => {
  return (
    <div>
      <div>
        <ul className="users-list users-head">
          <li>Name</li>
          <li>Username</li>
          <li>Actions</li>
        </ul>
      </div>
      <div>
        {props.users.length > 0 ? (
          props.users.map(user => (
            <ul key={user.id} className="users-list">
              <li>{user.name}</li>
              <li>{user.username}</li>
              <li>
                <FiEdit title="Edit" onClick={() => props.editRow(user)} size="1.5em" className="edit-btn" />
                <MdDelete title="Delete" onClick={() => props.deleteUser(user.id)} size="1.5em" className="delete-btn" />
              </li>
            </ul>
          ))
        ) : (
          <ul>
            <li>No users, please add user</li>
          </ul>
        )}
      </div>
    </div>
  )
}
export default UserTable;
