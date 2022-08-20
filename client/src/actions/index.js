import axios from 'axios';
import { CURRENT_BALANCE } from './actions';

function createOperation(data) {
    return async (dispatch) => {
        try {
            console.log(data)
            const res = await axios.post('http://localhost:3001/addOperations', data)
        } catch (e) {
            alert(e.response.data)
        }
    }
}
export {
    createOperation,
}