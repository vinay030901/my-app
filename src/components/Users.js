import Button from '@mui/material/Button'
import User from "./User";
export default function Users(props) {
    return (
        <div>
            {props.userData.map((user) => <User key={user} user={user} du={props.du} />)}
            <Button disabled={!props.dl} onClick={props.da}>Delete All</Button>
        </div>
    )

}
