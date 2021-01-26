import axios from 'axios';

export const GetListItems = () => {
    return axios.get("/getTodoList");
}