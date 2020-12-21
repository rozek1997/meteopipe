import React from "react";
import "./Input.css"

class Input extends React.Component {


    render() {

        const {type, hint, onChange, value, name} = this.props;
        return (
            <React.Fragment>
                <div className="input-field">
                    <input type={type} id={name} autoComplete="true" onChange={event => onChange(event)} value={value}
                           name={name}/>
                    <label htmlFor={name}>{hint}</label>
                </div>

            </React.Fragment>
        );
    }
}

export default Input;