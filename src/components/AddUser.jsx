import { FormControl, FormGroup, Input, InputLabel, Button, makeStyles, Typography } from "@material-ui/core";
import { useState } from 'react';
import { adduser } from '../Service/api';
import { useNavigate } from 'react-router-dom';
const useStyle = makeStyles({
    container: {
        width: '50%',
        margin: '10% auto auto',
        '& > *': {
            marginTop: 20
        }
    }
})
const initialValue = {
    name: '',
    username: '',
    email: '',
    phone: ''
}
const AddUser = () => {
    const [user, setUser] = useState(initialValue);
    // const { name, username, email, phone } = initialValue;
    const classes = useStyle();
    const history = useNavigate();
    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const AddUserDetail = async () => {
        if (user.name !== '' && user.username !== '' && user.name != '') {
            await adduser(user);
            setUser(initialValue);
            history('/all');
        }

        else {
            alert("fill all fields");
        }
    }
    return (

        <FormGroup className={classes.container}>
            <Typography variant='h4'>ADD USERS</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input name='name' onChange={(e) => onValueChange(e)} value={user.name} />
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input name='username' onChange={(e) => onValueChange(e)} value={user.username} />
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input name='email' onChange={(e) => onValueChange(e)} value={user.email} />
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input name='phone' onChange={(e) => onValueChange(e)} value={user.phone} />
            </FormControl>
            <Button onClick={AddUserDetail} variant='contained' color='primary'>Add User</Button>
        </FormGroup>
    )
}
export default AddUser;