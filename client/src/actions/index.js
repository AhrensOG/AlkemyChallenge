import axios from 'axios';
import { CURRENT_BALANCE, DELETE_OPERATION, GET_OPERATIONS, GET_TEN_REGISTERED_OPERATIONS, RESET_RESPONSE_API, SAVE_TYPE_OPERATION, UPDATE_OPERATION } from './actions';

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

function deleteOperation (id) {
    return async (dispatch) => {
        try {
            const res = await axios.delete(`http://localhost:3001/deleteOperation?idOp=${id}`,)
            return dispatch({
                type: DELETE_OPERATION,
                payload: res.data
            })
        } catch (e) {
            alert(e.response.data)
            
        }
    }
}

function updateOperation(data) {
    return async (dispatch) => {
        try {
            console.log(data)
            const res = await axios.put(`http://localhost:3001/updateOperation`, data)
            return res
        } catch (e) {
            console.log(e.response.data)
        }
    }
}

function saveTypeOperation(data) {
    return (dispatch) => {
        try {
            return dispatch({
                type: SAVE_TYPE_OPERATION,
                payload: data
            })
        } catch (e) {
            
        }
    }
}

export {
    createOperation,
    getCurrentBalance,
    getTenRegisteredOperatons,
    getOperations,
    deleteOperation,
    updateOperation,
    saveTypeOperation,
}