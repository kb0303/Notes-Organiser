import React from 'react'

export default function Alert(props) {

    const capitalize = (word) => {
        if(word === 'danger') {
            word = 'error'
        }
        else if(word === 'primary') {
            word = 'Message'
        }
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
        <div style={{height: '50px'}}>
            {props.Alert && <div className={`alert alert-${props.Alert.type} alert-dismissible fade show text-center`} role="alert">
                <strong>{capitalize(props.Alert.type)}</strong>: {props.Alert.msg}
            </div>}
        </div>
    )
}
