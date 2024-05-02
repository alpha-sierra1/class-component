import React, { Component } from "react";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "John Doe",
        email: "john@example.com",
        age: 30,
      },
    };
  }

  render() {
    const { name, email, age } = this.state.user;
    return (
      <div>
        <h2>User Profile</h2>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Age: {age}</p>
      </div>
    );
  }
}

export default UserProfile;
