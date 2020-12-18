import React from "react";
import {Auth} from "aws-amplify"
import Input from "../form/Input";
import "./SignUpForm.css"

class SignUpForm extends React.Component {


    constructor(props) {
        super(props);


        this.state = {
            user: {
                email: "",
                username: "",
                password: "",
                repeatedPassword: "",
                name: "",
            }
        }
    }

    handleValidation = () => {
        const {user} = this.state;
        return user.password === user.repeatedPassword && user.email.length > 0 && user.username.length > 0;
    }

    submit = async () => {

        const {email, username, password, name} = this.state.user;
        try {
            const {user} = await Auth.signUp({
                username,
                password,
                attributes: {
                    email,
                    name
                }
            });
            console.log(user);
        } catch (error) {
            console.log('error signing up:', error);
        }
    }

    onInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    };

    render() {

        const {user} = this.state;
        return (
            <div className="registration-form">
                <Input type="email" hint="email" value={user.email} onChange={this.onInputChange} name="email"/>
                <Input type="text" hint="username" value={user.username} onChange={this.onInputChange} name="username"/>
                <Input type="password" hint="password" value={user.password} onChange={this.onInputChange}
                       name="password"/>
                <Input type="password" hint="repeat password" value={user.repeatedPassword}
                       onChange={this.onInputChange} name="repeatedPassword"/>
                <Input type="text" hint="name" value={user.name} onChange={this.onInputChange} name="name"/>
                <button type="submit" onClick={this.submit()} disabled={!this.handleValidation()} value="Register"
                        className="register-btn"/>
            </div>
        );
    }
}

export default SignUpForm;