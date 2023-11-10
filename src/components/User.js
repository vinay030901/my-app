import Button from '@mui/material/Button'
export default function User(props) {
    return (
        <div>
            <p> {props.user}</p>
            <Button variant="contained" onClick={() => this.props.du(this.props.user)} >delete user</Button>
        </div>
    )

}

