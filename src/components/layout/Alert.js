import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alert = () => {
    const alertContext = useContext(AlertContext);

        const { alert, clearAlert } = alertContext;

        if (alert) {
            return (
                <div className={`alert alert-${alert.type}`}>
                    Error! {alert.msg}
                    <button className='btn' style={crossStyle} onClick={clearAlert} >&times;</button>
                </div>
            );
        } else return null;
}

const crossStyle = {
    float: 'right',
    fontSize: '25px',
    border: 0,
    padding: 0,
    margin: 0,
    position: 'relative',
    bottom: '5px'
}

export default Alert
