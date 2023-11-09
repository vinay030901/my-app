import { Component } from "react";
import Button from '@mui/material/Button'
export default class User extends Component {
    render() {
        return (
            <div>
                <p> {this.props.user}</p>
                <Button variant="contained" onClick={() => this.props.du(this.props.user)} >delete user</Button>
            </div>
        )
    }
}