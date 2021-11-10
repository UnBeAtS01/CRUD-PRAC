import axios from 'axios';

const url = 'http://localhost:8000';
export const getUsers = async (id) => {
    id = id || '';
    return await axios.get(`${url}/${id}`);
}
export const adduser = async (user) => {
    return await axios.post(`${url}/add`, user);

}
export const edituser = async (id, user) => {
    return await axios.put(`${url}/${id}`, user);

}
export const deleteuser = async (id) => {
    return await axios.delete(`${url}/${id}`);

}