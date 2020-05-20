import React, { useReducer } from "react";
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import {
    SHOW_ALERT,
    CLEAR_ALERT
} from '../types';

const AlertState = props => {
    const initialState = null;

    const [state, dispatch] = useReducer(AlertReducer, initialState);

    // Manage alert
    const showAlert = (msg, type) => {
        dispatch({
            type: SHOW_ALERT,
            payload: { msg, type }
        });
        setTimeout(() => dispatch({ type: CLEAR_ALERT }), 3500);
    };

    const clearAlert = () => dispatch({ type: CLEAR_ALERT });

    return <AlertContext.Provider
        value={{
            alert: state,
            showAlert,
            clearAlert
        }}
    >
        {props.children}
    </AlertContext.Provider>
}

export default AlertState;
