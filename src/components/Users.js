import { Component } from "react";
import User from "./User";
export default class Users extends Component {
    render() {
        return (
            <div>
                {this.props.userData.map((user) => <User key={user} user={user} du={this.props.du} />)}
                <button disabled={!this.props.dl} onClick={this.props.da}>Delete All</button>
            </div>
        )
    }
}