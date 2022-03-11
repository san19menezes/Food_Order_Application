import React from 'react';
import classes from './Input.module.css';

//Use forward ref to forward ref to custom component
const Input = React.forwardRef((props) => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input {...props.input} />
        </div>

    )
});

export default Input