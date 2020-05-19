import React, { Component } from 'react'

export class Alert extends Component {
    render() {

        const { alert, clearAlert } = this.props;

        if (this.props.alert.msg) {
            return (
                <div className={`alert alert-${alert.type}`}>
                    <i className='fas fa-exclamation-triangle'></i> {alert.msg}
                    <button className='btn' style={crossStyle} onClick={clearAlert} ><i className="fas fa-times-circle"></i></button>
                </div>
            );
        } else return null;
    }
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
