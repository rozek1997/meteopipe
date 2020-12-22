import React from "react";
import "./Input.css"

class Input extends React.Component {


    render() {

        const {name, value, hint, error, type, onChange} = this.props;
        return (
            <React.Fragment>
                <div className="inputField">
                    <input type={type} id={name} autoComplete="true" onChange={event => onChange(event)} value={value}
                           name={name} required/>
                    <label htmlFor={name}>{hint}</label>
                    {error ? <span className="inputField__error">{error}</span> : null}
                </div>

            </React.Fragment>
        );
    }
}

export default Input;