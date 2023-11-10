import Button from '@mui/material/Button'


export default function AddUser(props) {
    const addUser = (e) => {
        e.preventDefault();
        const data = e.target.elements.username.value;
        props.au(data);
    }
    return (
        <div>
            <form onSubmit={addUser}>
                Username: <input type="text" name="username" />
                <Button variant="contained" >Add User</Button>
            </form>
        </div>
    )
}
