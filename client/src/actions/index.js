import axios from 'axios';
import { CURRENT_BALANCE, GET_OPERATIONS, GET_TEN_REGISTERED_OPERATIONS } from './actions';

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

function getCurrentBalance() {
    return async (dispatch) => {
        try {
            const balance = await axios.get('http://localhost:3001/currentBalance')
            return dispatch({
                type: CURRENT_BALANCE,
                payload: balance.data
            })
        } catch (e) {
            alert(e.response.data)
            
        }
    }
}

function getTenRegisteredOperatons() {
    return async (dispatch) => {
        try {
            const operations = await axios.get('http://localhost:3001/tenRegisteredOperations')
            return dispatch({
                type: GET_TEN_REGISTERED_OPERATIONS,
                payload: operations.data
            })
        }
        catch (e) {
            
        }
    } 
}

function getOperations(type) {
    return async (dispatch) => {
        try {
            const operations = await axios.get(`http://localhost:3001/allOperations?type=${type}`)
            return dispatch({
                type: GET_OPERATIONS,
                payload: operations.data
            })
        } catch (error) {
            
        }
    }
}

export {
    createOperation,
    getCurrentBalance,
    getTenRegisteredOperatons,
    getOperations
}