import React, { useState, useEffect } from 'react';

const EditUserForm = props => {
  const [user, setUser] = useState(props.currentUser);

  const handleInputChange = event => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]); 
  
  const handleSubmit = (event) => {
    event.preventDefault();

    props.updateUser(user.id, user);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input type="text" name="name" value={user.name} onChange={handleInputChange} />
      </div>
      <div>
        <label>Username</label>
        <input type="text" name="username" value={user.username} onChange={handleInputChange} />
      </div>
      <button className="update-user-btn">Update user</button>
      <button onClick={() => props.setEditing(false)} className="cancel-btn">
        Cancel
      </button>
    </form>
  )
}

export default EditUserForm;
