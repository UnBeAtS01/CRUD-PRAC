import { getUsers, deleteuser } from "../Service/api";
import { useEffect, useState } from "react";
import { TableBody, TableCell, TableHead, TableRow, Table, makeStyles, Button } from "@material-ui/core";
import { Link } from 'react-router-dom'
const useStyle = makeStyles({
    table: {
        width: '90%',
        margin: '50px 0 0 50px'
    },
    thead: {
        '& > *': {
            background: '#000000',
            color: '#FFFFFF',
            fontSize: 20
        }
    },
    row: {
        '& > *': { font: 20 }
    }
})

const AllUsers = () => {
    const [users, setUsers] = useState([]);
    const classes = useStyle();
    useEffect(() => {
        getAllUsers();
    }, [])
    const getAllUsers = async () => {
        const response = await getUsers();
        setUsers(response.data);
    }
    const deleteUserData = async (id) => {
        await deleteuser(id);
        getAllUsers();
    }
    return (
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>
                        Id
                </TableCell>
                    <TableCell>
                        name
                </TableCell>
                    <TableCell>
                        username
                </TableCell>
                    <TableCell>
                        email
                </TableCell>
                    <TableCell>
                        Phone
                </TableCell>
                    <TableCell>
                    </TableCell>
                </TableRow>

            </TableHead>
            <TableBody>
                {
                    users.map(user => (<TableRow className={classes.row}>
                        <TableCell>{user._id}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                        <TableCell>
                            <Button variant="contained" color="primary" style={{ marginRight: 5 }} component={Link} to={`/edit/${user._id}`}>Edit</Button>
                            <Button variant="contained" color="secondary" onClick={() => deleteUserData(user._id)}>Delete</Button>
                        </TableCell>

                    </TableRow>
                    ))
                }
            </TableBody>
        </Table >
    )
}
export default AllUsers;