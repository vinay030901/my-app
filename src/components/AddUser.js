import { Component } from "react";
export default class AddUser extends Component {
    addUser = (e) => {
        e.preventDefault();
        const data = e.target.elements.username.value;
        this.props.au(data);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.addUser}>
                    Username: <input type="text" name="username" />
                    <button >Add User</button>
                </form>
            </div>
        )
    }
}