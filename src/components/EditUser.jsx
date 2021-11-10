import { FormControl, FormGroup, Input, InputLabel, Button, makeStyles, Typography } from "@material-ui/core";
import { useEffect, useState } from 'react';
import { edituser, getUsers } from '../Service/api';
import { useNavigate, useParams } from 'react-router-dom';
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

const EditUser = () => {
    const { id } = useParams();
    const classes = useStyle();
    const history = useNavigate();
    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    useEffect(() => {
        loadUserData();
    }, [])

    const loadUserData = async () => {
        const response = await getUsers(id);
        setUser(response.data);
    }
    const [user, setUser] = useState(initialValue);
    // const { name, username, email, phone } = initialValue;

    const EditUserDetail = async () => {
        if (user.name !== '' && user.username !== '' && user.name != '') {
            await edituser(id, user);
            setUser(initialValue);
            history('/all');
        }

        else {
            alert("fill all data first");
        }
    }
    return (

        <FormGroup className={classes.container}>
            <Typography variant='h4'>EDIT USERS</Typography>
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
            <Button onClick={EditUserDetail} variant='contained' color='primary'>Save Changes</Button>
        </FormGroup>
    )
}
export default EditUser;